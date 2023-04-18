import { ChangeEvent, useState } from "react"

export default function SignUpStatePage() {
  const [email,setemail] = useState(" ")
  const [password,setpassword] = useState(" ")
  const [error, seterror] = useState("")

  const onChangeEMail =(event:ChangeEvent<HTMLInputElement>) =>{
   setemail(event.target.value)
   console.log(email)

  }

  const onCHangepassword = (event) =>{
      setpassword(event.target.value)
      console.log(password)
  }

  const submit =() =>{
    if(email.includes("@") === false){
      seterror("이메일이 올바르지 않습니다.")
    }else{
      seterror("회원가입을 축하합니다. ")
    }
    console.log(`${email}id , password: ${password}`)
    setemail("")
    setpassword("")

  }
  return(
    <>
    email: <input type="text" value={email} onChange={onChangeEMail}/>
    <br/>
    password: <input type="password" value={password} onChange={onCHangepassword}/>
    <button onClick={submit}> 회원가입</button>
    <br/>
    <div>{error}</div>

    </>
  )
}