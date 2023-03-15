import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentlistPresenter from "./boardcommentlist.presenter";
import BoardCommentlistItem from "./boardcommentlist.presenterItem";
import { FETCH_BOARD_COMMENTS } from "./boardcommentlist.queries";

export default function BoardCommentlistContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.number),
    },
  });

  const onLoadMore = () => {
    if (data === undefined) return;
    // prettier-ignore

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length/10)+ 1},
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoardComments === undefined)
          return { 
            fetchBoardComments: [...prev.fetchBoardComments] 
          };
        return {
          fetchBoardComments:[...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <>
      <BoardCommentlistItem data={data} onLoadMore={onLoadMore} />
    </>
  );
}
