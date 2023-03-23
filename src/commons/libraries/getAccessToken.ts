import { Modal } from "antd";
import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export const getAccessToeken = async () => {
  try {
    const graphQlClient = new GraphQLClient(
      "https://backendonline.codebootcamp.co.kr/graphql",
      {
        //중요한 기밀 정보를 포함할것인지 확인
        credentials: "include",
      }
    );
    const result = await graphQlClient.request(RESTORE_ACCESS_TOKEN);
    const newAcessToken = result.restoreAccessToken.accessToken;
    return newAcessToken;
  } catch (error) {
    if (error instanceof Error) Modal.error({ content: error.message });
  }
};
