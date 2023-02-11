import { ArrowBackBtn } from "@/components/button/index.style";
import {
  SelctPocketTitle,
  SelectPocketSpan,
  SelectPocketForm,
} from "@/components/SelectPocket/index.style";
import DefaultButton from "@/components/UI/Button";
import {
  LetterBox,
  LetterContentParagraph,
  LetterSenderParagraph,
  LetterSenderSpan,
  LetterStamp,
  ReceiverParagraph,
} from "@/components/WriteLetter/index.style";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WriteLetterPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const messageColor = location.state ? location.state.pocket : null;
  const money = location.state ? location.state.money : null;

  useEffect(() => {
    if (!location.state) navigate("/selectpocket");
  });

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(messageColor, money);
    try {
    } catch (error) {}
  };
  return (
    <>
      <SelectPocketForm onSubmit={onSubmit}>
        <ArrowBackBtn onClick={() => navigate(-1)} />
        <SelctPocketTitle>
          <SelectPocketSpan>진심을 담은 편지</SelectPocketSpan>를<br />
          써주세요!
        </SelctPocketTitle>
        <LetterBox>
          <ReceiverParagraph>To. 달토끼에게</ReceiverParagraph>
          <LetterContentParagraph placeholder='편지를 입력하세요...'></LetterContentParagraph>
          <LetterSenderParagraph>
            From. <LetterSenderSpan>익명이</LetterSenderSpan>
          </LetterSenderParagraph>
          <LetterStamp />
        </LetterBox>
        <DefaultButton label={`보내기`} />
      </SelectPocketForm>
    </>
  );
};

export default WriteLetterPage;
