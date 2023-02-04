import PageDescParagraph from "@/components/UI/PageDescParagraph";
import TabMenu from "@/components/ReadMyPocket/TabMenu";

const ReadMyPocket = () => {
  return (
    <>
      <PageDescParagraph>받은 복주머니</PageDescParagraph>
      {/* 탭 메뉴와 받은 복주머니 리스트 컴포넌트 */}
      <TabMenu />
      {/* 페이지네이션 버튼 - 쿼리로 추가 예정 */}
    </>
  );
};

export default ReadMyPocket;
