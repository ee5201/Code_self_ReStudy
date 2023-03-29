import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";

const CREATE_USER = gql`
  mutation loginUserExample($email: String!, $password: String) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginP() {
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [CreateUser] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(CREATE_USER);
  const [accessToken, setaccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const onchangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [event.currentTarget.id]: event.currentTarget.value });
  };

  const onClickSubmit = () => {
    try {
      const result = CreateUser({
        variables: {
          ...input,
        },
      });
      console.log(result);
      const accessToken = result.data?.loginUserExample.accessToken;

      if (!accessToken) {
        Modal.error({ content: "로그인에 실패하였습니다." });
        return;
      }
      setaccessToken(accessToken);
      void router.push("");

      alert("로그인이 되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      이메일:
      <input id="email" type="text" onChange={onchangeInput} />
      비밀번호:
      <input id="password" type="password" onChange={onchangeInput} />
      <button onClick={onClickSubmit}>로그인하기</button>
    </>
  );
}
