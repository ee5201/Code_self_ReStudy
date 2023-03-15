import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApi() {
  const [dogUrl, setUrl] = useState("");

  useEffect(() => {
    const FetchDong = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setUrl(result.data.message);
    };
    void FetchDong();
  }, []);

  return (
    <>
      <img src={dogUrl} />
    </>
  );
}
