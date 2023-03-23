export interface IProps {
  setdata: any;
  data: any;
}

export default function ListUI({ datas, setdata }) {
  const onclickdel = (boardId: number) => () => {
    const del = datas.filter((el) => el.id !== boardId);
    console.log("sss", del);
    setdata(del);
  };
  return (
    <>
      {datas.map((el) => (
        <div key={el.id}>
          <span>{el.contents}</span>
          <button onClick={onclickdel(el.id)}>삭제</button>
          <button>수정</button>
        </div>
      ))}
    </>
  );
}
