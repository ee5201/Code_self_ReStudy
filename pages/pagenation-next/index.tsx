import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";

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
const Row = styled.span`
  font-size: 20px;
  padding: 0.6em;

  :hover {
    color: blue;
  }
`;

export default function PageNation() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onclickChange = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage < 10) {
      return;
    } else {
      setStartPage((prev) => prev - 10);
      void refetch({ page: startPage - 10 });
    }
  };
  const onClicknextPage = () => {
    if (data?.fetchBoards.title == "") {
      return;
    } else {
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
    }
  };
  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <div>{el.title}</div>
          <div>{el.contents}</div>
        </div>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <Row key={index + 1} id={index + 1} onClick={onclickChange}>
          {index + startPage}
        </Row>
      ))}
      <span onClick={onClicknextPage}>다음페이지</span>
    </>
  );
}
