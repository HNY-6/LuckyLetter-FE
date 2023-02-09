import * as S from './styles/ReadMyPocket.styled';
import MyPocketItem from './MyPocketItem';

const DUMMY_LIST = [
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
      {selectedTabIndex === 0 &&
        DUMMY_LIST.map((item) => (
          <MyPocketItem
            key={item.id}
            id={item.id}
            isRead={item.isRead}
            color={item.color}
            author={item.author}
          />
        ))}
      {selectedTabIndex === 1 &&
        DUMMY_LIST.filter((item) => item.isRead === true).map((item) => (
          <MyPocketItem
            key={item.id}
            id={item.id}
            isRead={item.isRead}
            color={item.color}
            author={item.author}
          />
        ))}
      {selectedTabIndex === 2 &&
        DUMMY_LIST.filter((item) => item.isRead === false).map((item) => (
          <MyPocketItem
            key={item.id}
            id={item.id}
            isRead={item.isRead}
            color={item.color}
            author={item.author}
          />
        ))}
    </S.MyPocketList>
  );
};

export default MyPocketList;
