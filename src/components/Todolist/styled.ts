import styled from "@emotion/styled";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffffff,
    #6dd5fa,
    #2980b9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const Boxcontainer = styled.div`
  width: 500px;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  border-radius: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
  display: flex;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: inherit;
  border-bottom: 2px solid #ddd;
  margin-top: 20px;
  font-size: 20px;
  padding: 5px;
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  width: 50px;
  height: 20px;
  margin-top: 20px;
  background: #283048; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #859398,
    #283048
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #859398,
    #283048
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
`;

export const ListWrapper = styled.div`
  diplay: flex;
  margin-top: 10px;
  padding: 10px;

  // -webkit-box-shadow: 5px 2px 9px 4px rgba(0, 0, 0, 0.75);
  // box-shadow: 5px 2px 9px 4px rgba(0, 0, 0, 0.75);
`;

export const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 3px solid white;
`;

export const Contents = styled.span`
  display: flex;
  padding: 5px;
  font-size: 20px;
  text-decoration: ${(props) => (props.isColor ? "line-through" : "none")};
`;
export const ContentInput = styled.input``;
