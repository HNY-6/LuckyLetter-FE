import { useState } from "react";
import TabButtonItem from "./TabButtonItem";
import TabButtonListStyle from "./TabButtonListStyle";

const tabMenuTitle = [
  {
    title: "전체 복주머니",
  },
  {
    title: "읽은 복주머니",
  },
  {
    title: "안읽은 복주머니",
  },
];

const TabButtonList = () => {
  const [active, setActive] = useState(0);

  const activeTabButtonHandler = (index: number): void => {
    setActive(index);
  };

  const tabMenuButtons = tabMenuTitle.map((button, index) => {
    return (
      <TabButtonItem key={button.title}>
        <button
          className={index === active ? "active" : ""}
          onClick={() => activeTabButtonHandler(index)}>
          {button.title}
        </button>
      </TabButtonItem>
    );
  });

  return <TabButtonListStyle>{tabMenuButtons}</TabButtonListStyle>;
};

export default TabButtonList;
