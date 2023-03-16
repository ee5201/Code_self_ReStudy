import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function SearchKeyword() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const debounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  });

  const OnchangeSearch = (event) => {
    debounce(event.currentTarget.value);
  };

  const onClickMove = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };
  return (
    <div>
      검색어 입력:
      <input type="text" onChange={OnchangeSearch} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.contents}</span>
        </div>
      ))}
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <span onClick={onClickMove} id={index + 1}>
            {index + 1}
          </span>
        ))}
    </div>
  );
}
