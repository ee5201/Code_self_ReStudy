import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";

//prettier-ignore
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!)
  {createBoard( createBoardInput:$createBoardInput
    ) {
      writer
      _id
      contents
      title
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);
  const [input, setinput] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });

  const onCLickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          createBoardInput: {
            ...input,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }

    alert("등록했당");
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [event.target.id]: event.target.value });
  };

  return (
    <>
      writer:
      <input id="writer" onChange={onChangeInput} type="text" />
      <br />
      Title
      <input id="title" onChange={onChangeInput} type="text" />
      <br />
      Contents:
      <input id="contents" onChange={onChangeInput} type="text" />
      password:
      <input id="password" onChange={onChangeInput} type="password" />
      <br />
      <button onClick={onCLickSubmit}>GRAPHQL-API(동기)요청하기</button>
    </>
  );
}
