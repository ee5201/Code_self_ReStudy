import { useMutation } from "@apollo/client";
import { gql } from "graphql-request";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕하세요", contents: "하이") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onclickSubmit = () => {
    const result = 나의함수();
    console.log(result);
  };

  return (
    <div>
      <button onClick={onclickSubmit}>Graphql-API 요청하기</button>
    </div>
  );
}
