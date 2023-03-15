import { useMutation } from "@apollo/client";
import { Modal, Rate } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BOardCommentWriteContainer from "../write/boardcommentwrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./boardcommentlist.queries";
import * as S from "./boardcommentlist.style";
import { IBoardCommentListUIProps } from "./boardcommentlist.types";

export default function BoardCommentlistPresenter(
  props: IBoardCommentListUIProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeletModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const [deletBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const OnClickUpdateBoard = () => {
    setIsEdit(true);
  };
  const OnClickDeleteBoard = async () => {
    try {
      await deletBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.number },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const OnClickDelete = () => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event?.currentTarget.value);
  };

  return (
    <>
      {isOpenDeletModal && (
        <Modal visible={true} onOk={OnClickDeleteBoard}>
          <div>비밀번호 입력:</div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.Wrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />

            <S.Header>
              <S.MainWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Rating>
                  <Rate value={props.el?.rating} disabled />
                </S.Rating>
              </S.MainWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
              <S.DateBox>
                <S.Date>2022.03.08</S.Date>
              </S.DateBox>
            </S.Header>
            <S.Icons>
              <S.IconsItem
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={OnClickUpdateBoard}
              />
              <S.IconsItem
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={OnClickDelete}
              />
            </S.Icons>
          </S.FlexWrapper>
        </S.Wrapper>
      )}
      {isEdit && (
        <BOardCommentWriteContainer
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
