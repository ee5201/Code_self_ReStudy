import { Observable } from "@apollo/client";
import { from } from "zen-observable";

export default function ObsevableFlatmapPage() {
  const onclickPage = () => {
    // new promises(()=>{})
    // new Observable()

    from(["1번", "2번", "3번"])
      .flatMap((el) =>
        from([
          `${el} 결과에 qqq적용`,
          `${el} 결과에 www적용`,
          `${el} 결과에 rrr적용`,
        ])
      )
      .subscribe((el) => console.log(el));
  };
  return (
    <>
      <button onClick={onclickPage}>클릭</button>
    </>
  );
}
