import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";

import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOADFILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setwriter] = useState("");
  const [title, settitle] = useState("");
  const [contents, setcontents] = useState("");
  const [image, setimage] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const [Image] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const [Myfunction] = useMutation(CREATE_BOARD);

  const onCLickSubmit = async () => {
    const result = await Myfunction({
      variables: {
        createBoardInput: {
          writer: writer,
          password: "1234",
          title: title,
          contents: contents,
          image: [image],
        },
      },
    });
    console.log(result);
  };

  const OnChangeInputWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setwriter(event.target.value);
  };

  const OnChangeInputTitle = (event: ChangeEvent<HTMLInputElement>) => {
    settitle(event.target.value);
  };

  const OnChangeInputcontents = (event: ChangeEvent<HTMLInputElement>) => {
    setcontents(event.target.value);
  };

  const OnChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    console.log(file);

    try {
      const result = await Image({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setimage(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const OnClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      작성자:
      <input type="text" onChange={OnChangeInputWriter} />
      제목:
      <input type="text" onChange={OnChangeInputTitle} />
      내용:
      <input type="text" onChange={OnChangeInputcontents} />
      <button onClick={onCLickSubmit}>등록하기</button>
      <div
        onClick={OnClickImage}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      >
        이미지 선택
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={OnChangeFile}
        ref={fileRef}
        // accept="image/jpeg"
      />
      <img src={`https://storage.googleapis.com/${image}`} />
    </>
  );
}
