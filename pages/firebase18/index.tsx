import {
  collection,
  addDoc,
  getDoc,
  getFirestore,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseeApp } from "../_app";
export default function Firebase() {
  const onclicksubmit = () => {
    const board = collection(getFirestore(firebaseeApp), "board");
    void addDoc(board, {
      writer: "철수",
      title: "제목입니다.",
      contents: "내요이에요",
    });
  };

  const onclickFetch = async () => {
    const board = collection(getFirestore(firebaseeApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  //

  return (
    <>
      <button onClick={onclicksubmit}>등록하기</button>
      <button onClick={onclickFetch}>조회하기</button>
    </>
  );
}
