import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 만든다.
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6160ba4436b44a6c51a92f1260dd66af";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.486739, 126.900467),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log(map);
      });
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6160ba4436b44a6c51a92f1260dd66af"
        ></script>
      </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}
