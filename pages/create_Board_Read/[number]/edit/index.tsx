import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardContainer from "../../../../src/components/units/boardwrite/boardcontainer";

const FECTH_BOARDS = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function BoardEditWrite() {
  const router = useRouter();
  const { data } = useQuery(FECTH_BOARDS, {
    variables: {
      boardId: String(router.query.number),
    },
  });

  return (
    <>
      <BoardContainer istrue={true} data={data} />
    </>
  );
}
