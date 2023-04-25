import { useMutation } from "@apollo/client";
import { gql } from "graphql-request";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $title) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onclickSubmit = () => {
    const result = 나의함수({
      variables: {
        writer: "훈이",
        title: "",
        contents: "",
      },
    });
    console.log(result);
  };

  return (
    <div>
      <button onClick={onclickSubmit}>Graphql-API 요청하기</button>
    </div>
  );
}
