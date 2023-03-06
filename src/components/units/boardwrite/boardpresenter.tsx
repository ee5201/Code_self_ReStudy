import * as S from "./boardstyles";
import { BoardWriteUI } from "./boardWriteType";
import { Button, Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import Uploads01Container from "../uploads01/uploads01.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardPresenter(props: BoardWriteUI) {
  return (
    <div>
      <S.Wrapper>
        <S.TItle>게시물 등록</S.TItle>

        <S.Box>
          <S.InputBox>
            <S.Lable>작성자:</S.Lable>
            <S.InputBoxItem
              type="text"
              placeholder="아이디를 입력해주세요"
              onChange={props.onChangeWriter}
            />
          </S.InputBox>
          <S.InputBox>
            <S.Lable>비밀번호:</S.Lable>
            <S.InputBoxItem
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
            />
          </S.InputBox>
        </S.Box>

        <S.Box2>
          <S.InputBox>
            <S.Lable> 제목 </S.Lable>
            <S.TitleInputItem
              type="text"
              placeholder="제목를 입력해주세요"
              onChange={props.onchangeTitle}
            />
          </S.InputBox>
        </S.Box2>

        <S.Box2>
          <S.InputBox>
            <S.Lable>내용</S.Lable>
            <S.ContentInputItem
              type="text"
              placeholder="내용을 입력해주세요"
              onChange={props.onchangeContents}
            />
          </S.InputBox>
        </S.Box2>

        <S.Box2>
          <S.InputBox>
            <S.Lable> 주소 </S.Lable>
            <div>
              <S.MailInputItem
                type="text"
                placeholder="07250"
                value={props.postcode}
                readOnly
              />
              <S.MailButtonItem onClick={props.showModal}>
                우편번호 검색
              </S.MailButtonItem>
              {props.isModalOpen && (
                <Modal
                  open={props.PostcodeButton}
                  onOk={props.PostcodeButton}
                  onCancel={props.PostcodeButton}
                >
                  <p>{props.address}</p>
                  <DaumPostcodeEmbed onComplete={props.DaumPostcode} />
                </Modal>
              )}
            </div>
            <S.TitleInputItem type="text" value={props.address} readOnly />
            <S.TitleInputItem type="text" placeholder="상세주소 입력해주세요" />
          </S.InputBox>
        </S.Box2>

        <S.Box2>
          <S.InputBox>
            <S.Lable>유튜브</S.Lable>
            <S.TitleInputItem type="text" />
          </S.InputBox>
        </S.Box2>

        <S.Box2>
          <div>
            <S.Lable>사진첨부</S.Lable>
            {props.fileUrls.map((el, index) => (
              <Uploads01Container
                key={uuidv4()}
                index={index}
                fileurl={el}
                onchangeFileUrl={props.onchangeFileUrl}
              />
            ))}
          </div>
        </S.Box2>

        <S.Box3>
          <div>
            <S.Lable>메인설정</S.Lable>
            <S.Radioinput type="radio" />
            <S.Box3Lable>유튜브</S.Box3Lable>
            <S.Radioinput type="radio" />
            <S.Box3Lable>사진</S.Box3Lable>
          </div>
        </S.Box3>

        <S.SubmitButton isColor={props.isColor} onClick={props.onClicksubmit}>
          등록하기
        </S.SubmitButton>
      </S.Wrapper>
    </div>
  );
}
