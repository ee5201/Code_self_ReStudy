import * as S from "./board.styles";

export default function BoardPresenter() {
  return (
    <S.Wrapper>
      <h1>게시물 등록하기</h1>

      <div>
        <div>
          <span>작성자:</span>
          <input type="text" />
        </div>
        <div>
          <span>비밀번호:</span>
          <input type="password" />
        </div>
      </div>

      <div>
        <div>
          <span>제목:</span>
          <input type="text" />
        </div>
      </div>

      <div>
        <div>
          <span>내용:</span>
          <input type="text" />
        </div>
      </div>

      <div>
        <span>주소</span>
        <div>
          <input type="text" />
          <button>우편번호 검색</button>
        </div>
        <input type="text" />
        <input type="text" />
      </div>

      <div>
        <span>유튜브:</span>
        <input type="text" />
      </div>

      <div>
        <span>사진첨부</span>
        <div>
          <button>+</button>
          <button>+</button>
          <button>+</button>
        </div>
      </div>

      <div>
        <span>메인 설정</span>
        <div>
          <input type="radio" />
          <span>유튜브</span>
        </div>
        <div>
          <input type="radio" />
          <span>사진</span>
        </div>
      </div>

      <div>
        <button>등록하기</button>
      </div>
    </S.Wrapper>
  );
}
