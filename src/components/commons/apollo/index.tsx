import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Modal } from "antd";
import { createUploadLink } from "apollo-upload-client";
import { GraphQLClient } from "graphql-request";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToeken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";
interface IApolloSettingProps {
  children: JSX.Element;
}
const GlobalState = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setaccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    //1. 기존방식(refreshToken 이전)
    // const result = localStorage.getItem("accessToken");
    // console.log(result);
    // if (result) setaccessToken(result);

    //2. 새로운 방식(refreshToken 이후)
    void getAccessToeken().then((newAcessToken) => {
      setaccessToken(newAcessToken);
    });
  }, []);

  //graphqlError: 에러를 잡는다.
  //operation: 방금전에 실패했던 쿼리 정보들
  // forward : 다시 날려주는것
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //1-1 에러를 캐치
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        //1-2 해당 에러가 토큰 만료 에러인지 체크(unauthenticated)
        if (error.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            //2-1 refreshToken 으로 accessToken을 재발급 받기
            getAccessToeken().then((newAcessToken) => {
              //2-2 재발급 받은 accessToken 저장하기
              setaccessToken(newAcessToken);
              //3-1 재발급 받은 accessToken으로 방금 실패한 쿼리의 정보 수정하기

              //getcontext:query같은 정보들을 가져올때 사용한다.
              //setcontext: 수정할경우
              if (typeof newAcessToken !== "string") return;
              operation.getContext({
                header: {
                  ...operation.getContext().headers, //만료된 토큰이 추가되어있는 상태
                  Authorization: `Bearer ${newAcessToken}`, //토큰만 새걸로 바꿔치기
                },
              });
              //3-2 재발급 받은 accessToken으로 방금 수정한 쿼리 재요청하기
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
    //3-2 재발급 받은 accessToken으로 방금 수정한 쿼리 재요청하기
  });

  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GlobalState,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
)
}
