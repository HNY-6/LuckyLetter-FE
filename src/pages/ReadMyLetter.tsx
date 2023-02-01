import { useLocation } from "react-router-dom";

import PageDescParagraph from "@/components/UI/PageDescParagraph";
import LetterContainer from "@/components/ReadMyLetter/LetterContainer";
import LetterButton from "@/components/ReadMyLetter/LetterButton";

const ReadMyLetter = () => {
  const location = useLocation();

  return (
    <>
      <PageDescParagraph>
        <span>익명이</span>님이 보낸 복주머니
      </PageDescParagraph>
      {/* 편지지 */}
      <LetterContainer color={location.state.color} />
      {/* 삭제 / 확인 버튼 */}
      <LetterButton />
    </>
  );
};

export default ReadMyLetter;
