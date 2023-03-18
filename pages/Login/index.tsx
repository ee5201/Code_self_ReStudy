import { gql, useMutation } from "@apollo/client";
import { async } from "@firebase/util";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";

const CREATE_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const [Create_user] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(CREATE_USER);
  const [input, setinput] = useState({
    email: "",
    password: "",
  });
  const [accessToken, setaccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();

  const onchangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setinput({ ...input, [event.currentTarget.id]: event.currentTarget.value });
  };

  const onClickSubmit = async () => {
    try {
      const result = await Create_user({
        variables: {
          ...input,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        Modal.error({ content: "로그인에 실패하였습니다." });
        return;
      }
      setaccessToken(accessToken);
      void router.push("/LoginSucess");
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
