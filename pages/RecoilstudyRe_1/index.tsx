import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import BoardContainer from "../../src/components/units/boardwrite/boardcontainer";
import BoardContainesr from "../../src/components/units/globalstate/boarder.cotainer";

export default function RecoileState1() {
  return (
    <>
      <BoardContainesr />
    </>
  );
}
