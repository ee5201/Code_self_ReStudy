import { ChangeEvent } from "react";

export interface BoardWriteUI {
  onchangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onClicksubmit: () => void;
  isColor: boolean;
  isModalOpen: boolean;
}
