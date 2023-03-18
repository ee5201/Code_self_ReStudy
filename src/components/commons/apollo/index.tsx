import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
interface IApolloSettingProps {
  children: JSX.Element;
}
const GlobalState = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setaccessToken] = useRecoilState(accessTokenState);
  const uploadLink = createUploadLink({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GlobalState,
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>
)
}
