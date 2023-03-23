import { useRecoilState } from "recoil";
import { isEditState, Test } from "../../../commons/store";

export default function BoardPresenter() {
  const [test, settest] = useRecoilState(Test);
  return (
    <>
      {/* <div>{isedit ? "수정" : "등록"}</div> */}
      <div>{test}</div>
    </>
  );
}
