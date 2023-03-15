import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
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

export default function StaticeRoutedPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const OnLoadmore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1000 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={OnLoadmore} hasMore={true}>
        {data?.fetchBoards.map((el) => (
          <div>
            <span>{el.title}</span>
            <span>{el.contents}</span>
          </div>
        ))}
        {""}
        ?? <div></div>
      </InfiniteScroll>
    </>
  );
}
