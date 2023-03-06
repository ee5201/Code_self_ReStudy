import { useState } from "react";
import { Change } from "./colorstyle";

export default function CHangeColor() {
  const [istrue, setchange] = useState(false);

  const OnclickChangeButton = () => {
    setchange((prev) => !prev);
  };

  return (
    <>
      <Change istrue={istrue} onClick={OnclickChangeButton}>
        눌르면 색상이 바뀝니다.
      </Change>
    </>
  );
}
