import * as S from './styles/ReadMyPocket.styled';
import MyPocketItems from './MyPocketItems';

type DUMMY_LIST_TYPE = {
  id: number;
  pocket: string;
  senderNickname: string;
  status: string;
}[];

const DUMMY_LIST: DUMMY_LIST_TYPE = [
  { id: 1, pocket: 'red', senderNickname: '김성훈', status: 'READ' },
  { id: 2, pocket: 'orange', senderNickname: '김수현', status: 'UNREAD' },
  { id: 3, pocket: 'yellow', senderNickname: '추경훈', status: 'READ' },
  { id: 4, pocket: 'green', senderNickname: '익명이', status: 'UNREAD' },
  { id: 5, pocket: 'navy', senderNickname: '안상언', status: 'READ' },
  { id: 6, pocket: 'red', senderNickname: '정수연', status: 'READ' },
  { id: 7, pocket: 'red', senderNickname: '김성훈', status: 'UNREAD' },
  { id: 8, pocket: 'red', senderNickname: '김수현', status: 'READ' },
  { id: 9, pocket: 'red', senderNickname: '추경훈', status: 'UNREAD' },
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
          pocketData={DUMMY_LIST.filter((item) => item.status === 'READ')}
        />
      )}
      {selectedTabIndex === 2 && (
        <MyPocketItems
          tabIndex={selectedTabIndex}
          pocketData={DUMMY_LIST.filter((item) => item.status === 'UNREAD')}
        />
      )}
    </S.MyPocketList>
  );
};

export default MyPocketList;
