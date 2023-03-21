import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapS() {
  const router = useRouter();
  const onclickMove = () => {
    router.push("/kakaoMaprouted");
  };
  return (
    <>
      <button onClick={onclickMove}> 이동하기</button>
    </>
  );
}
