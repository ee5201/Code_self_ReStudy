import { useState } from "react"

export default function Counterstatedocumentpage () {
  const [count,setCount] = useState(0)

  const onClickcountUP = () =>{
   setCount(count + 1)
   
  }

  const onClickcountDown = () =>{
    if(count>0){
      setCount(count - 1)
    }else{
      return;
    }



  }
  return(
  <>
  <div>{count}</div>
  <button onClick={onClickcountUP}>올리기</button>
  <button onClick={onClickcountDown}>내리기</button>


  </>
  )
}