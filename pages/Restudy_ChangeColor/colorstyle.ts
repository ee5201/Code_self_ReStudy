import styled from "@emotion/styled";

export const Change = styled.div`
  color: ${(props) => (props.istrue ? "red" : "black")};
  cursor: pointer;
`;
