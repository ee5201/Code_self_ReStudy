import { ChangeEvent, useCallback } from "react";

export default function FormUI({ setValue, handleSubmit }) {
  const onchangevalue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onchangevalue} />
        <button type="submit">등록</button>
      </form>
    </>
  );
}
