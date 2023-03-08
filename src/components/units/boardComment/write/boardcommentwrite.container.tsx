import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  CREATE_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "../list/boardcommentlist.queries";
import BOardCommentWritePresenter from "./boardcommentwrite.presenter";
import { CREATE_BOARD_COMMENT } from "./boardcommentwrite.queries";

export default function BOardCommentWriteContainer(props) {
  const [writer, setWrite] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setcontents] = useState("");
  const [Rate, setRate] = useState(0);
  const router = useRouter();

  const [CREATECOMMENT] = useMutation(CREATE_BOARD_COMMENT);

  const onchangWrite = (event: ChangeEvent<HTMLInputElement>) => {
    setWrite(event.currentTarget.value);
  };

  const onchangPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onchangContents = (event: ChangeEvent<HTMLInputElement>) => {
    setcontents(event.currentTarget.value);
  };

  const onclicksubmit = async () => {
    try {
      await CREATECOMMENT({
        variables: {
          boardId: router.query.number,
          createBoardCommentInput: {
            writer: writer,
            password: password,
            contents: contents,
            rating: Rate,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.number,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
    setWrite("");
    setPassword("");
    setcontents("");
  };

  return (
    <>
      <BOardCommentWritePresenter
        onchangWrite={onchangWrite}
        onchangPassword={onchangPassword}
        onchangContents={onchangContents}
        onclicksubmit={onclicksubmit}
        Rate={Rate}
        setRate={setRate}
        writer={writer}
        password={password}
        contents={contents}
        el={props.el}
      />
    </>
  );
}
