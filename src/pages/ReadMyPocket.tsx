import PageDescParagraph from "@/components/UI/PageDescParagraph";
import TabButtonList from "@/components/ReadMyPocket/TabButtonList";
import MyPocketList from "@/components/ReadMyPocket/MyPocketList";
import { useState } from "react";

const ReadMyPocket = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectTabButtonHandler = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <PageDescParagraph>받은 복주머니</PageDescParagraph>
      {/* 탭 메뉴 컴포넌트 */}
      <TabButtonList getSelectedIndex={selectTabButtonHandler} />
      {/* 받은 복주머니 데이터 리스트 */}
      <MyPocketList selectedIndex={selectedIndex} />
      {/* 페이지네이션 버튼 */}
    </>
  );
};

export default ReadMyPocket;
