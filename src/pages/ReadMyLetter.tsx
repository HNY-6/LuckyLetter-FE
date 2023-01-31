import PageDescParagraph from "@/components/UI/PageDescParagraph";
import LetterContainer from "@/components/ReadMyLetter/LetterContainer";
import LetterButton from "@/components/ReadMyLetter/LetterButton";

const ReadMyLetter = () => {
  return (
    <>
      <PageDescParagraph>
        <span>익명이</span>님이 보낸 복주머니
      </PageDescParagraph>
      {/* 편지지 */}
      <LetterContainer />
      {/* 삭제 / 확인 버튼 */}
      <LetterButton />
    </>
  );
};

export default ReadMyLetter;
