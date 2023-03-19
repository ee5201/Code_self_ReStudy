import { gql, useMutation } from "@apollo/client";
import { async } from "@firebase/util";
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
  const ImgRef = useRef<HTMLInputElement>(null);
  const [Images, setImage] = useState("");

  const [image] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADFILE);

  const onClickImg = () => {
    ImgRef.current.click();
  };

  const onchangFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    try {
      const result = await image({ variables: { file } });
      setImage(result.data.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <div onClick={onClickImg}>이미지선택</div>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onchangFile}
        ref={ImgRef}
      />
      <img src={`https://storage.googleapis.com/${Images}`} />
    </>
  );
}
