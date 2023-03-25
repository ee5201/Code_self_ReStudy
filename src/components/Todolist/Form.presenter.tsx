import { ChangeEvent, useCallback } from "react";
import * as S from "./styled";

export default function FormUI({ setValue, handleSubmit, value }) {
  const onchangevalue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder="입력해주세요"
          type="text"
          onChange={onchangevalue}
          value={value}
        />
        <S.Button type="submit">등록</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}
