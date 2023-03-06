import { Modal } from "antd";

export default function Uploads01vaildation(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "파일이없습니다." });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다(제한 5MB)" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일이 확장자가 올바르지 않습니다(jpeg,Png만 가능)",
    });
    return false;
  }

  return file;
}
