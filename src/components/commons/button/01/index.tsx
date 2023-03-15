import * as yup from "yup";
interface Iprops {
  formState: boolean;
  title: string;
}
export default function Button01(props: Iprops) {
  return (
    <button style={{ backgroundColor: props.formState ? "yellow" : "" }}>
      {props.title}
    </button>
  );
}
