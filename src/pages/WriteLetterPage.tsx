import { ArrowBackBtn } from "@/components/button/index.style";
import {
  SelctPocketTitle,
  SelectPocketSpan,
  SelectPocketWrapper,
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

const WriteLetterPage = () => {
  return (
    <>
      <SelectPocketWrapper>
        <ArrowBackBtn />
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
      </SelectPocketWrapper>
    </>
  );
};

export default WriteLetterPage;
