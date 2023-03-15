import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

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
  const [search, setsearch] = useState("");
  const [keyword, setkeyword] = useState("");

  const onclickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setkeyword(value);
  }, 500);

  const onChangeInput = (event) => {
    getDebounce(event.currentTarget.value);
  };
  return (
    <>
      검색어 입력
      <input type="text" onChange={onChangeInput} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>
            {el.title
              .replaceAll(keyword, `!@#$${keyword}!@#$`)
              .split("!@#$")
              .map((el) => {
                <span
                  key={uuidv4()}
                  style={{ color: el === keyword ? "red" : "black" }}
                />;
              })}
          </span>
          <span>{el.contents}</span>
        </div>
      ))}
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <span key={index + 1} id={index + 1} onClick={onclickPage}>
            {index + 1}
          </span>
        ))}
    </>
  );
}
