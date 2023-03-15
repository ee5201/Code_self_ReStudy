import { useState } from "react";
import Child1 from "../../src/commons/utils/child1";

export default function Child() {
  const [count, setcount] = useState(0);

  const onclickCHange = () => {
    setcount((prev) => prev + 1);
  };

  return (
    <>
      <Child1 onclickCHange={onclickCHange} count={count} />
    </>
  );
}
