import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getmydata } from "../../../commons/utils";
import BoardReadPresenter from "./boardRead.presenter";
import { FECTH_BOARD } from "./boardRead.queries";

export default function BoardReadContainer() {
  const router = useRouter();
  const { data } = useQuery(FECTH_BOARD, {
    variables: { boardId: router.query.number },
  });

  const onclickChange = () => {
    router.push(`/create_Board_Read/${router.query.number}/edit`);
  };
  return (
    <>
      <BoardReadPresenter
        getmydata={getmydata}
        data={data}
        onclickChange={onclickChange}
      />
    </>
  );
}
