import BoardCommentlistContainer from "../../../src/components/units/boardComment/list/boardcommentlist.container";
import BOardCommentWriteContainer from "../../../src/components/units/boardComment/write/boardcommentwrite.container";
import BoardReadContainer from "../../../src/components/units/boardRead/boardRead.container";

export default function BoardRead() {
  return (
    <>
      <BoardReadContainer />
      <BOardCommentWriteContainer />
      <BoardCommentlistContainer />
    </>
  );
}
