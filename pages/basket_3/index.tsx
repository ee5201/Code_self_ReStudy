import { gql, useQuery } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { Alert, Modal } from "antd";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const Row = styled.span`
  justify-content: center;
  font-size: 20px;
  padding: 0.6em;
  padding: 1em;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
type IBaskets = Array<Pick<IBoard, "contents" | "title" | "_id" | "writer">>;

export default function Baseket_3() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD);

  const onCliCKButton = (boardId: number) => () => {
    void refetch({ page: boardId });
  };

  const onClickInside = (basket: IBoard) => () => {
    const Baskets: IBaskets = JSON.parse(
      localStorage.getItem("basket") ?? " []"
    );
    //장바구니 만들기( 배열 만들기)

    const Temp = Baskets.filter((el) => el._id === basket._id);
    if (Temp.length === 1) {
      alert("이미 담았습니다. 다른 상품을 담아주세요");
      return;
    }

    const { __typename, ...newbaskets } = basket;
    Baskets.push(newbaskets);
    localStorage.setItem("basket", JSON.stringify(Baskets));
    alert("물품을 담았습니다.");
    //물건을 담기
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickInside(el)}>장바구니 담기</button>
        </div>
      ))}
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <Row onClick={onCliCKButton(index + 1)} key={index}>
            {index + 1}
          </Row>
        ))}
    </>
  );
}
