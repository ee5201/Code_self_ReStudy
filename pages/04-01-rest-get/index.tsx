import axios from "axios";

export default function RestGetPage() {
  const onCLickasync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result); // promist
  };

  const onclicksync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result.data.title); // 제대로된 결과
  };

  return (
    <div>
      <button onClick={onCLickasync}>REST-API(비동기)</button>
      <button onClick={onclicksync}>REST-API(동기)</button>
    </div>
  );
}
