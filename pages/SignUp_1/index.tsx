import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";

const CREATEUSER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
      email
    }
  }
`;

export default function SingUp() {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [Creatuser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATEUSER);

  const OnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [event.currentTarget.id]: event.currentTarget.value });
  };

  const OnclickSignup = () => {
    try {
      const result = Creatuser({
        variables: {
          createUserInput: {
            ...input,
          },
        },
      });
      alert("회원가입 완료하였습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      이름:
      <input id="name" onChange={OnChangeInput} type="text" />
      이메일:
      <input id="email" onChange={OnChangeInput} type="text" />
      비밀번호:
      <input id="password" onChange={OnChangeInput} type="password" />
      <button onClick={OnclickSignup}>등록하기</button>
    </>
  );
}
