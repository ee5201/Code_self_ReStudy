import { gql, useMutation } from "@apollo/client";
import { async } from "@firebase/util";
import { Modal } from "antd";
import { useRef, useState } from "react";
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

export default function ImageTest2() {
  const [CreateBoard] = useMutation(CREATE_BOARD);
  const [Image] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);
  const [image, setimage] = useState("");
  const [input, setinput] = useState({
    writer: "",
    title: "",
    contents: "",
    password: "",
  });
  const filref = useRef<HTMLInputElement>(null);
  const Onchangeinput = (event) => {
    setinput({ ...input, [event.currentTarget.id]: event.currentTarget.value });
  };

  const onCLickSubmit = async () => {
    try {
      const result = await CreateBoard({
        variables: {
          createBoardInput: {
            ...input,
            images: [image],
          },
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const OnClickImage = (event) => {
    filref.current?.click();
  };

  const OnChangeFile = async (event) => {
    const file = event.target.files?.[0];

    try {
      const result = await Image({
        variables: { file },
      });
      setimage(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      작성자:
      <input id="writer" type="text" onChange={Onchangeinput} />
      제목:
      <input id="title" type="text" onChange={Onchangeinput} />
      내용:
      <input id="contents" type="text" onChange={Onchangeinput} />
      비밀번호:
      <input id="password" type="text" onChange={Onchangeinput} />
      <button onClick={onCLickSubmit}>등록하기</button>
      <div
        onClick={OnClickImage}
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
      >
        이미지 선택
      </div>{" "}
      <input
        style={{ display: "none" }}
        type="file"
        onChange={OnChangeFile}
        ref={filref}
        // accept="image/jpeg"
      />
      <img src={`https://storage.googleapis.com/${image}`} />
    </>
  );
}
