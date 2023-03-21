import { gql, useQuery } from "@apollo/client";
import { type } from "os";
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

type IBaskets = Array<Pick<IBoard, "contents" | "title" | "_id" | "writer">>;
export default function StaticRouteePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onclickBasket = (basket: IBoard) => () => {
    const baskets: IBaskets = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );

    const Temp = baskets.filter((el) => el._id === basket._id);
    if (Temp.length === 1) {
      alert("이미 담으신 물품 입니다.");
      return;
    }

    const { __typename, ...newbasket } = basket;
    baskets.push(newbasket);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    alert("물품을 담았습니다");
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <div>{el.title}</div>
          <div>{el.contents}</div>
          <button onClick={onclickBasket(el)}>장바구니</button>
        </div>
      ))}
    </>
  );
}
