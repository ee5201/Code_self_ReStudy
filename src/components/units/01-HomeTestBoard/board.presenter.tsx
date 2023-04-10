import * as S from "./board.styles";

export default function BoardPresenter() {
  return (
    <S.Wrapper>
      <S.MainTitle>게시물 등록하기</S.MainTitle>

      <S.BoardWriterWrapper>
        <S.BoardWriterinputBox>
          <S.Lable>작성자:</S.Lable>
          <S.BoardWriterinput type="text" />
        </S.BoardWriterinputBox>
        <S.BoardWriterinputBox>
          <S.Lable>비밀번호:</S.Lable>
          <S.BoardWriterinput type="password" />
        </S.BoardWriterinputBox>
      </S.BoardWriterWrapper>

      <S.BoardTitleWrapper>
        <S.BoardTitleinputBox>
          <S.Lable>제목:</S.Lable>
          <S.BoardTitleinput type="text" />
        </S.BoardTitleinputBox>
      </S.BoardTitleWrapper>

      <S.BoardContentWrapper>
        <S.BoardContentinputBox>
          <S.Lable>내용:</S.Lable>
          <S.BoardContentinput type="text" />
        </S.BoardContentinputBox>
      </S.BoardContentWrapper>

      <S.BoardZipWrapper>
        <S.Lable>주소</S.Lable>
        <S.BoardZipinputBox>
          <S.BoardZipinput type="text" />
          <S.BoardZipButton>우편번호 검색</S.BoardZipButton>
        </S.BoardZipinputBox>
        <S.BoardZipDetailinput type="text" />
        <S.BoardZipDetailinput type="text" />
      </S.BoardZipWrapper>

      <S.BoardTitleWrapper>
        <S.BoardYouTubeinputBox>
          <S.Lable>유튜브:</S.Lable>
          <S.BoardTitleinput type="text" />
        </S.BoardYouTubeinputBox>
      </S.BoardTitleWrapper>

      <S.BoardZipWrapper>
        <S.Lable>사진첨부</S.Lable>
        <S.BoardImageButtonBox>
          <S.BoardImageButton>+</S.BoardImageButton>
          <S.BoardImageButton>+</S.BoardImageButton>
          <S.BoardImageButton>+</S.BoardImageButton>
        </S.BoardImageButtonBox>
      </S.BoardZipWrapper>

      <S.BoardZipWrapper>
        <S.Lable>메인설정</S.Lable>
        <S.BoardImageButtonBox>
          <S.BoardImageButtonBox>
            <S.BoardMainSettinginput type="radio" />
            <S.Lable>유튜브</S.Lable>
          </S.BoardImageButtonBox>
          <S.BoardImageButtonBox>
            <S.BoardMainSettinginput type="radio" />
            <S.Lable>사진</S.Lable>
          </S.BoardImageButtonBox>
        </S.BoardImageButtonBox>
      </S.BoardZipWrapper>
      <S.BoardSubmittWrapper>
        <S.BoardWriteSubmit>등록하기</S.BoardWriteSubmit>
      </S.BoardSubmittWrapper>
    </S.Wrapper>
  );
}
