import { ChangeEvent, RefObject } from "react";

export interface IUploads01UIProps {
  fileurl: string;
  fileRef: RefObject<HTMLInputElement>;
  onclickUpload: () => void;
  onchangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
