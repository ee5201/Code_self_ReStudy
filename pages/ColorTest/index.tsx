import { useState } from "react";
import styled from "@emotion/styled";
import QQQQQ from "../../src/components/ColorTest";

export default function Color() {
  const [list, setlist] = useState("");
  const [Array, setArray] = useState([]);
  const onchange = (event) => {
    setlist(event.currentTarget.value);
  };

  const onclick = () => {
    const TOBY = {
      contents: list,
    };

    console.log(Array.length);
    if (Array.length === 2) {
      setlist("");
      return;
    } else {
      setArray((prev) => [...prev, TOBY]);
      setlist("");
    }
  };
  return (
    <>
      {/* <QQQQQ qqq={qqq} /> */}
      <input onChange={onchange} type="text" value={list} />
      <div>
        {Array.map((el, index) => (
          <div key={index}>
            <span>{el.contents}</span>
          </div>
        ))}
      </div>
      <button onClick={onclick}>클릭</button>
    </>
  );
}
