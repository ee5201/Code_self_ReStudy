import { useState } from "react";

export default function CommentEditC(props) {
  const [change, setchange] = useState(false);

  const onclickChange = () => {
    setchange((prev) => !prev);
  };
  return (
    <div>
      {!change && (
        <div>
          <span>{props.el.title}</span>
          <span>{props.el?.contents}</span>
          <button onClick={onclickChange}>수정하기</button>
        </div>
      )}
      {change && (
        <>
          수정할 내용: <input />
          <button>등록하기</button>
        </>
      )}
    </div>
  );
}
