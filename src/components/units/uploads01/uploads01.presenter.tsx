import { PlusButton, UploadFileHidden, UploadImage } from "./uploads01.styles";
import { IUploads01UIProps } from "./uploads01.types";
export default function Uploads01Presenter(props: IUploads01UIProps) {
  return (
    <>
      {props.fileurl ? (
        <UploadImage
          onClick={props.onclickUpload}
          src={`https://storage.googleapis.com/${props.fileurl}`}
        />
      ) : (
        <PlusButton onClick={props.onclickUpload}>
          <>+</>
          <>upload</>
        </PlusButton>
      )}

      <UploadFileHidden
        ref={props.fileRef}
        type="file"
        onChange={props.onchangeFile}
      />
    </>
  );
}
