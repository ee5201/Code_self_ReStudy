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
  const [CREATEUSE] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATEUSER);

  const OnclickSignup = async () => {
    try {
      const result = await CREATEUSE({
        variables: {
          createUserInput: {
            ...input,
          },
        },
      });
      console.log(result);
      alert("회원가입 완료!!");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const OnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [event.currentTarget.id]: event.currentTarget.value });
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
