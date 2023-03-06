import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BoardPresenter from "./boardpresenter";
import { CREATE_BOARD } from "./boardqueries";

export default function BoardContainer() {
  const [Writer, setWriter] = useState("");
  const [Password, setPassword] = useState("");
  const [Contents, setcontents] = useState("");
  const [Title, setTitle] = useState("");
  const [isColor, setColor] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setaddress] = useState("");
  const [postcode, setpostcode] = useState("");
  const [fileUrls, setFileUrl] = useState(["", "", ""]);

  const [CREATEBOARD] = useMutation(CREATE_BOARD);
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
      />
    </>
  );
}
