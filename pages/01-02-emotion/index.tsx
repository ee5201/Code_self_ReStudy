import styled from "@emotion/styled";
export default function Emotion() {
  const Writer = styled.div`
    color: red;
  `;

  return (
    <div>
      <Writer>철수</Writer>
      <input type="text" />
      <button>클릭</button>
    </div>
  );
}
