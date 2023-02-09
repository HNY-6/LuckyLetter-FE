import { useState } from 'react';
import * as S from './styles/ReadMyPocket.styled';

import TabButtonItem from './TabButtonItem';

const tabMenuTitle = [
  {
    title: '전체 복주머니',
  },
  {
    title: '읽은 복주머니',
  },
  {
    title: '안읽은 복주머니',
  },
];

interface TabButtonListType {
  getSelectedIndex: (index: number) => void;
}

const TabButtonList = ({ getSelectedIndex }: TabButtonListType) => {
  const [active, setActive] = useState(0);

  const activeTabButtonHandler = (index: number): void => {
    setActive(index);
    getSelectedIndex(index);
  };

  const tabMenuButtons = tabMenuTitle.map((button, index) => {
    return (
      <TabButtonItem key={button.title}>
        <button
          className={index === active ? 'active' : ''}
          onClick={() => activeTabButtonHandler(index)}>
          {button.title}
        </button>
      </TabButtonItem>
    );
  });

  return <S.TabButtonList>{tabMenuButtons}</S.TabButtonList>;
};

export default TabButtonList;
