import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IUpdateBoardInput } from "../../../commons/types/generated/types";
import BoardPresenter from "./boardpresenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardqueries";

export default function BoardContainer(props) {
  const [Writer, setWriter] = useState("");
  const [Password, setPassword] = useState("");
  const [Contents, setcontents] = useState("");
  const [Title, setTitle] = useState("");
  const [isColor, setColor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setaddress] = useState("");
  const [postcode, setpostcode] = useState("");
  const [fileUrls, setFileUrl] = useState(["", "", ""]);
  const router = useRouter();

  const [CREATEBOARD] = useMutation(CREATE_BOARD);
  const [UPDATEBOARD] = useMutation(UPDATE_BOARD);
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.currentTarget.value);
    if (
      event.currentTarget.value !== " " &&
      Password !== " " &&
      Title !== " " &&
      Contents !== " "
    ) {
      setColor(true);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.currentTarget.value);
    if (
      Writer !== " " &&
      event.currentTarget.value !== " " &&
      Title !== " " &&
      Contents !== " "
    ) {
      setColor(true);
    }
  };
  const onchangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setcontents(event?.currentTarget.value);
    if (
      Writer !== " " &&
      Password !== " " &&
      Title !== " " &&
      event.currentTarget.value !== " "
    ) {
      setColor(true);
    }
  };
  const onchangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event?.currentTarget.value);
    if (
      Writer !== " " &&
      Password !== " " &&
      event.currentTarget.value !== " " &&
      Contents !== " "
    ) {
      setColor(true);
    }
  };

  const onClicksubmit = async () => {
    try {
      if (!Writer) {
        alert("작성자를 입력해주세요");
        return;
      }
      if (!Password) {
        alert("비밀번호를 입력해주세요");
        return;
      }
      if (!Contents) {
        alert("내용을 입력해주세요");
        return;
      }
      if (!Title) {
        alert("제목을 입력해주세요");
        return;
      }
      const result = await CREATEBOARD({
        variables: {
          createBoardInput: {
            writer: Writer,
            password: Password,
            contents: Contents,
            title: Title,
          },
        },
      });
      console.log(result);
      alert("등록되었습니다.");
      router.push(`/create_Board_Read/${result.data.createBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClicksubmitChange = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangeFiles = currentFiles !== defaultFiles;
    const updateBoardInput: IUpdateBoardInput = {};
    if (Title) updateBoardInput.title = Title;
    if (Contents) updateBoardInput.contents = Contents;
    if (isChangeFiles) updateBoardInput.images = fileUrls;

    if (!Title && !Contents && !isChangeFiles) {
      alert("수정된 내용이 없습니다.");
      return;
    }
    if (!Password) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    try {
      const result = await UPDATEBOARD({
        variables: {
          boardId: String(router.query.number),
          password: Password,
          updateBoardInput: updateBoardInput,
        },
      });
      await router.push(`/create_Board_Read/${result.data?.updateBoard?._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const PostcodeButton = () => {
    setIsModalOpen((prev) => !prev);
  };

  const DaumPostcode = (address: Address) => {
    setaddress(address.address);
    setpostcode(address.zonecode);
    console.log(address);
  };

  const onchangeFileUrl = (fileurl: string, index: number) => {
    const newFileURL = [...fileUrls];
    newFileURL[index] = fileurl;
    setFileUrl(newFileURL);
    console.log(newFileURL);
    return;
  };
  return (
    <>
      <BoardPresenter
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onClicksubmit={onClicksubmit}
        onchangeContents={onchangeContents}
        onchangeTitle={onchangeTitle}
        isColor={isColor}
        showModal={showModal}
        isModalOpen={isModalOpen}
        PostcodeButton={PostcodeButton}
        DaumPostcode={DaumPostcode}
        address={address}
        postcode={postcode}
        onchangeFileUrl={onchangeFileUrl}
        fileUrls={fileUrls}
        istrue={props.istrue}
        data={props.data}
        onClicksubmitChange={onClicksubmitChange}
      />
    </>
  );
}
