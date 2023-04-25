import { useMutation } from "@apollo/client";
import { gql } from "graphql-request";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { useState } from "react";

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
  const [input, setinput] = useState({
    writer: " ",
    title: " ",
    contents: " ",
  });

  const onclickSubmit = () => {
    const result = 나의함수({
      variables: {
        //variablers == $ 역활을 한다.
        // writer: "훈이",
        // title: "",
        // contents: "",
        ...input,
      },
    });
    console.log(result);
  };

  const ALLonchange = (event) => {
    setinput({ ...input, [event.target.value]: input });
  };

  // const onchangewriter = (event) => {
  //   setinput
  // };

  // const onchangetitle = (event) => {};

  // const onchangecontent = (event) => {};

  return (
    <div>
      작성자: <input onChange={ALLonchange} type="text" />
      title: <input onChange={ALLonchange} type="text" />
      contents: <input onChange={ALLonchange} type="text" />
      <button onClick={onclickSubmit}>GraphQL-API요청</button>
    </div>
  );
}
