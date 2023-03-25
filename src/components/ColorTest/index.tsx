import styled from "@emotion/styled";

const AAA = styled.div`
  color: ${(props) => (props.qqq ? "red" : "white")};
`;
export default function QQQQQ(props) {
  return (
    <>
      <AAA qqq={props.qqq}>kikikikiki</AAA>
    </>
  );
}
