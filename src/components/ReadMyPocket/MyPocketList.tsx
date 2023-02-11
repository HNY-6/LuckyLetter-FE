import * as S from './styles/ReadMyPocket.styled';
import MyPocketItems from './MyPocketItems';

type DUMMY_LIST_TYPE = {
  id: number;
  color: string;
  author: string;
  isRead: boolean;
}[];

const DUMMY_LIST: DUMMY_LIST_TYPE = [
  { id: 1, color: 'red', author: '김성훈', isRead: true },
  { id: 2, color: 'orange', author: '김수현', isRead: false },
  { id: 3, color: 'yellow', author: '추경훈', isRead: true },
  { id: 4, color: 'green', author: '익명이', isRead: false },
  { id: 5, color: 'navy', author: '안상언', isRead: true },
  { id: 6, color: 'red', author: '정수연', isRead: true },
  { id: 7, color: 'red', author: '김성훈', isRead: false },
  { id: 8, color: 'red', author: '김수현', isRead: true },
  { id: 9, color: 'red', author: '추경훈', isRead: false },
];

interface MyPocketListType {
  selectedTabIndex: number;
}

const MyPocketList = ({ selectedTabIndex }: MyPocketListType) => {
  return (
    <S.MyPocketList>
      {selectedTabIndex === 0 && (
        <MyPocketItems tabIndex={selectedTabIndex} pocketData={DUMMY_LIST} />
      )}
      {selectedTabIndex === 1 && (
        <MyPocketItems
          tabIndex={selectedTabIndex}
          pocketData={DUMMY_LIST.filter((item) => item.isRead !== false)}
        />
      )}
      {selectedTabIndex === 2 && (
        <MyPocketItems
          tabIndex={selectedTabIndex}
          pocketData={DUMMY_LIST.filter((item) => item.isRead === false)}
        />
      )}
    </S.MyPocketList>
  );
};

export default MyPocketList;
