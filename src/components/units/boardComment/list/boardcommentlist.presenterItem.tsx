import InfiniteScroll from "react-infinite-scroller";
import BoardCommentlistPresenter from "./boardcommentlist.presenter";
import { IBoardCommentListUIProps } from "./boardcommentlist.types";

export default function BoardCommentlistItem(props: IBoardCommentListUIProps) {
  return (
    <>
      <InfiniteScroll pageStart={1} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentlistPresenter key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
