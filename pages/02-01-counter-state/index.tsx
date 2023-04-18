import { documentId } from "firebase/firestore/lite";
import { Fragment } from "react";

export default function Counterletdocument () {

  function handleClickCOuntUP () {
    const count = Number(document.getElementById("count").innerText)+1
    console.log(count)
    document.getElementById("count").innerText = count
    //innertext => div 안에 있는 글씨를 불러들어온다. 

  //  document.getElementById("count").innerText = count

  }

  function handleClickCOuntDown () {
    const count = Number(document.getElementById("count").innerText)-1
    console.log(count)
    if(count >= 0){
      document.getElementById("count").innerText = count

    }else if( count  === 0){
      return;
    }
  }

  return(
    <Fragment>
      <div id="count">0</div>
      <button onClick={handleClickCOuntUP}>카운트 올리기</button>
      <button onClick={handleClickCOuntDown}>카운트 내리기</button>
    </Fragment>
  )
}