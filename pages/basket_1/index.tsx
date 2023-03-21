import { gql, useQuery } from "@apollo/client";
import { Interface } from "readline";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
type IQERY = Pick<IQuery, "fetchBoards">;
type IBaskets = Array<Pick<IBoard, "contents" | "title" | "_id" | "writer">>;

export default function Basket() {
  const { data } = useQuery<IQERY>(FETCH_BOARDS);

  const Onclickchange = (basket: IBoard) => () => {
    console.log(basket);
    const baskets: IBaskets = JSON.parse(
      localStorage.getItem("basket") ?? "[]"
    );

    const Temp = baskets.filter((el) => el._id === basket._id);
    if (Temp.length === 1) {
      alert("이미 담은 아이템입니다.");
      return;
    }

    const { __typename, ...newbasket } = basket;
    baskets.push(newbasket);
    localStorage.setItem("basket", JSON.stringify(baskets));
    alert("물품을 담았습니다.");
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={Onclickchange(el)}>장바구니</button>
        </div>
      ))}
    </>
  );
}
