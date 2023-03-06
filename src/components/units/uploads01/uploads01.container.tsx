import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import Uploads01Presenter from "./uploads01.presenter";
import { UPLOAD_FILE } from "./uploads01.queries";
import { PlusButton } from "./uploads01.styles";
import Uploads01vaildation from "./uploads01.validation";
export default function Uploads01Container(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>(null);
  const onclickUpload = () => {
    fileRef.current?.click();
  };
  const onchangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = Uploads01vaildation(event?.target.files?.[0]);
    if (!file) return;
    try {
      const result = await uploadFile({
        variables: { file },
      });
      props.onchangeFileUrl(result.data?.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <Uploads01Presenter
        onclickUpload={onclickUpload}
        onchangeFile={onchangeFile}
        fileRef={fileRef}
      />
    </>
  );
}
