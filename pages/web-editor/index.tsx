// import ReactQuil from "react-quill";
import { async } from "@firebase/util";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어온다.
  const onChangeContents = (value: string) => {
    console.log(value);
  };

  const onClickSubmit = () => {
    // const { Modal } = dynamic(async () => await import("antd"), { ssr: false });
    // Modal.success({ content: "등록에 성공하였습니다." });
  };
  return (
    <>
      <div>
        작성자:
        <input type="text" />
        <br />
        비밀번호 :<input type="text" />
        <br />
        제목:
        <input type="text" />
        <br />
        내용:
        <ReactQuill onChange={onChangeContents} />
        <br />
        <button onClick={onClickSubmit}>등록하기</button>
      </div>
    </>
  );
}
