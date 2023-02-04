import { useState } from "react";
import MyPocketList from "./MyPocketList";
import TabButtonList from "./TabButtonList";

const TabMenu = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const getSelectedIndexHandler = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <>
      <TabButtonList getSelectedIndex={getSelectedIndexHandler} />
      <MyPocketList selectedTabIndex={selectedTabIndex} />
    </>
  );
};

export default TabMenu;
