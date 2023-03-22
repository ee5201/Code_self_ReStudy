import { useCallback, useState } from "react";

export default function UseCallBack() {
  let counts = 0;
  const onClickCounts = () => {
    counts += 1;
    console.log(counts);
  };

  const [count, setcount] = useState(0);

  const onClickCount = useCallback(() => {
    setcount((prev) => prev + 1);
    console.log((prev) => prev + 1);
  }, []);
  console.log("렌더링 됩니다.");
  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={onClickCounts}>카운트 올리기</button>
      </div>
      <div>
        <div>{count}</div>
        <button onClick={onClickCount}>카운트 올리기</button>
      </div>
    </>
  );
}
