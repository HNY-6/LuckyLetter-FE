import TabButtonList from "@/components/ReadMyPocket/TabButtonList";
import PageDescParagraph from "@/components/UI/PageDescParagraph";
import WrapperBox from "@/components/UI/WrapperBox";

const ReadMyPocket = () => {
  return (
    <WrapperBox>
      <PageDescParagraph>받은 복주머니</PageDescParagraph>
      {/* 탭 메뉴 컴포넌트 */}
      <TabButtonList />
      {/* 받은 복주머니 데이터 리스트 */}

      {/* 페이지네이션 버튼 */}
    </WrapperBox>
  );
};

export default ReadMyPocket;
