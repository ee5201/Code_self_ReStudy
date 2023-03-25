import { Modal } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormUI from "../../src/components/Todolist/Form.presenter";
import ListUI from "../../src/components/Todolist/list.presenter";
import * as S from "../../src/components/Todolist/styled";

export default function TodoList() {
  const [value, setValue] = useState(" ");
  const [datas, setdata] = useState([]);
  let handleSubmit = (event) => {
    event.preventDefault();

    let Tododata = {
      id: Date.now(),
      contents: value ?? "",
      complete: false,
    };
    if (datas.length === 11) {
      setValue("");
      Modal.error({ content: "최대 12개 입력이 가능합니다." });
      return;
    } else {
      setdata((prev) => [...prev, Tododata]);
      setValue("");
    }
  };

  return (
    <S.MainDiv>
      <S.Boxcontainer>
        <FormUI handleSubmit={handleSubmit} setValue={setValue} value={value} />
        <ListUI datas={datas} setdata={setdata} />
      </S.Boxcontainer>
    </S.MainDiv>
  );
}
