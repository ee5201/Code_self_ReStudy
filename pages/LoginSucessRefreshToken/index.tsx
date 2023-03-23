import { gql, useApolloClient, useLazyQuery, useQuery } from "@apollo/client";
import { async } from "@firebase/util";
import { IQuery } from "../../src/commons/types/generated/types";

// loginsuccess 폴더의 index.tsx
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  const client = useApolloClient();

  const onclickAxios = async () => {
    await client.query({
      query: FETCH_USER_LOGGED_IN,
    });
  };

  //1. 페이지 접속하면 자동으로 data에 받아지고 리렌더링 된다.
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  //2. 버튼 클릭시 직접 실행하면 data에 받아지고 , 리렌더링 된다.
  // const [myquery, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

  //3. axios와 동일하다.
  // const client = useApolloClient();

  return (
    <button onClick={onclickAxios}>클릭하기</button>
    // <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
  );
}
