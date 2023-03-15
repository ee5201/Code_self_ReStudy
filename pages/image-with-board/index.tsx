import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
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

export default function ImagePage() {
  const [create] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [image] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);
  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });
  const [Images, setImage] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const Onclicksubmit = async () => {
    try {
      const result = await create({
        variables: {
          createBoardInput: {
            ...input,
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
    alert("등록했습니다.");
  };

  const onchangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  const onClickImg = () => {
    fileRef.current?.click();
  };

  const onchangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    console.log(file);
    try {
      const result = await image({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      setImage(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      작성자:
      <input id="writer" type="text" onChange={onchangeInput} />
      비밀번호:
      <input id="password" type="password" onChange={onchangeInput} />
      제목:
      <input id="title" type="text" onChange={onchangeInput} />
      내용:
      <input id="contents" type="text" onChange={onchangeInput} />
      <button onClick={Onclicksubmit}>등록하기</button>
      <div onClick={onClickImg}>이미지선택:</div>
      <input type="file" onChange={onchangeFile} ref={fileRef} />
      <img
        src={`https://storage.googleapis.com/${Images}`}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      />
    </>
  );
}
