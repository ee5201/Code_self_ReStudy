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

  const [writers, setWriters] = useState("");
  const [titles, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Password, setpassword] = useState("");

  const onCLickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          createBoardInput: {
            writer: writers,
            title: titles,
            contents: Content,
            password: Password,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    alert("등록했당");
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriters(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onchagnePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setpassword(event.target.value);
  };

  return (
    <>
      writer:
      <input onChange={onChangeWriter} type="text" />
      <br />
      Title
      <input onChange={onChangeTitle} type="text" />
      <br />
      Contents:
      <input onChange={onChangeContents} type="text" />
      password:
      <input onChange={onchagnePassword} type="password" />
      <br />
      <button onClick={onCLickSubmit}>GRAPHQL-API(동기)요청하기</button>
    </>
  );
}
