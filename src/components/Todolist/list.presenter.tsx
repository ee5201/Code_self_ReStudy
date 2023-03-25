import { useState } from "react";
import * as S from "./styled";

export interface IProps {
  setdata: any;
  datas: any;
  isedit: boolean;
}

export default function ListUI(props: IProps) {
  const [isColor, setisedit] = useState(false);
  const onclickdel = (boardId: number) => () => {
    const del = props.datas.filter((el) => el.id !== boardId);
    console.log("sss", del);
    props.setdata(del);
  };

  const onclickInput = () => {
    setisedit((prev) => !prev);
  };

  const onclickrevise = () => {
    setisedit((prev) => !prev);
    console.log(isColor);
  };
  return (
    <S.ListWrapper>
      {props.datas.map((el) => (
        <S.ListBox key={el.id}>
          <S.ContentInput onClick={onclickInput} type="checkbox" />
          <S.Contents isColor={isColor}>{el.contents}</S.Contents>
          <div>
            <button onClick={onclickdel(el.id)}>삭제</button>
            <button onClick={onclickrevise}>수정</button>
          </div>
        </S.ListBox>
      ))}
    </S.ListWrapper>
  );
}
