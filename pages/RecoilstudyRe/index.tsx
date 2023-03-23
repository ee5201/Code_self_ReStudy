import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState, Test } from "../../src/commons/store";
import BoardContainer from "../../src/components/units/boardwrite/boardcontainer";
import BoardContainesr from "../../src/components/units/globalstate/boarder.cotainer";

export default function RecoileState() {
  const router = useRouter();

  const [test, settest] = useRecoilState(Test);

  const onclickq = () => {
    router.push("/RecoilstudyRe_1");
  };
  return (
    <>
      <button onClick={onclickq}>클릭</button>
    </>
  );
}
