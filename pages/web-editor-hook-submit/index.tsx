import { rgbToHex } from "@material-ui/core";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function WebEditorPageSubmit() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const [CreateBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const router = useRouter();

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onclickSubmit = async (data: any) => {
    try {
      const result = await CreateBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      if (typeof result.data?.createBoard._id !== "string") return;
      // void router.push("");
      alert("등록완료하였습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onclickSubmit)}>
        작성자: <input type="text" {...register("writer")} />
        <br />
        비밀번호:
        <input type="password" {...register("password")} />
        <br />
        제목:
        <input type="text" {...register("title")} />
        <br />
        내용:
        <ReactQuill onChange={onChangeContents} />
        <button>등록하기</button>
      </form>
    </>
  );
}
