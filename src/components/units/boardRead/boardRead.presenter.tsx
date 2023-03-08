import * as S from "./boardRead.styles";
import { getmydata } from "../../../commons/utils/index";
import BOardCommentWriteContainer from "../boardComment/write/boardcommentwrite.container";
export default function BoardReadPresenter(props) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvaterWrapper>
            <S.Avater src="" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.Writer>
                Date:{props.getmydata(props.data?.fetchBoard?.createAt)}
              </S.Writer>
            </S.Info>
          </S.AvaterWrapper>
        </S.Header>
        <S.Body>
          <S.Title>제목:{props.data?.fetchBoard.title}</S.Title>
          <S.Img></S.Img>
          <S.Contents>내용:{props.data?.fetchBoard.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>

      <S.Footer>
        <S.FooterItemBtn>목록으로</S.FooterItemBtn>
        <S.FooterItemBtn onClick={props.onclickChange}>
          수정하기
        </S.FooterItemBtn>
        <S.FooterItemBtn>삭제하기</S.FooterItemBtn>
      </S.Footer>
    </S.Wrapper>
  );
}
