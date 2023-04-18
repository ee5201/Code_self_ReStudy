import {useState} from 'react'

export default function SignUpstatePage(){
  const [email,setEmail] = useState("")
  const [password,setpassword] = useState("")
  const[emailError,setEmailError] = useState("")
  // const Message = document.getElementById('alert');

  function OnChangeEmail (event){
    setEmail(event.target.value);
  }
  
  function OnChangePassword (event) {
    setpassword(event.target.value)
  }

  function onclicksignup(event) {
    console.log(email)
    console.log(password)

    //검증하기 
    if(email.includes("@") === false){
      // Message.textContent= "이메일이 올바르지 않습니다! @가 없음"
      // alert("이메일이 올바르지 않습니다! @가 없음")
      setEmailError("이메일이 올바르지 않습니다! @가 없음")
    }else{
            //메이지 알림 이후 , backend 컴퓨터에 있는 api(함수) 요청하기 
      alert("회원가입을 축하합니다!")
    }
  }


  return(
      <div>
          Email:<input type="text" onChange={OnChangeEmail}/>
          {/* <div id="alert"></div> */}
          <div>{emailError}</div>
          Password:<input type="password" onChange={OnChangePassword}/>
          <button onClick={onclicksignup}>회원가입</button>
      </div>
  )

}