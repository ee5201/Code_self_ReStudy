import { UseFormRegisterReturn } from "react-hook-form";

interface Iprops {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: Iprops) {
  return <input type={props.type} {...props.register} />;
}
