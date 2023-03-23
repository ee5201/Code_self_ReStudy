import { useState } from "react";
import { useForm } from "react-hook-form";
import FormUI from "../../src/components/Todolist/Form.presenter";
import ListUI from "../../src/components/Todolist/list.presenter";

export default function TodoList() {
  const [value, setValue] = useState(" ");
  const [datas, setdata] = useState([]);
  let handleSubmit = (event) => {
    event.preventDefault();

    let Tododata = {
      id: Date.now(),
      contents: value,
      complete: false,
    };
    setdata((prev) => [...prev, Tododata]);
    console.log("adada", datas);
  };

  return (
    <>
      <FormUI handleSubmit={handleSubmit} setValue={setValue} />
      <ListUI datas={datas} setdata={setdata} />
    </>
  );
}
