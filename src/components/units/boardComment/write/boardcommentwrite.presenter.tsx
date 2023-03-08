import { Rate } from "antd";
import * as S from "./boardcommentwrite.style";
export default function BOardCommentWritePresenter(props) {
  return (
    <S.Wrapper>
      <>
        <S.Linethrough></S.Linethrough>
      </>
      <S.TitleBox>
        <S.Title>댓글</S.Title>
      </S.TitleBox>

      <S.InputBox>
        <S.InputBtn
          type="text"
          placeholder="작성자"
          onChange={props.onchangWrite}
          value={props.writer || (props.el?.writer ?? "")}
          readOnly={!!props.el?.writer}
        />
        <S.InputBtn
          type="password"
          placeholder="비밀번호"
          onChange={props.onchangPassword}
          value={props.password}
        />
        <Rate allowHalf value={props.Rate} onChange={props.setRate} />
      </S.InputBox>

      <S.InputContentBox>
        <S.InputContent
          type="text"
          onChange={props.onchangContents}
          placeholder="* 개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다. */"
          value={props.contents || (props.el?.contents ?? "")}
        />
        <S.BottomWrapper>
          <S.LineNumber>/100</S.LineNumber>
          <S.BottomButton onClick={props.onclicksubmit}>
            등록하기
          </S.BottomButton>
        </S.BottomWrapper>
      </S.InputContentBox>
    </S.Wrapper>
  );
}
