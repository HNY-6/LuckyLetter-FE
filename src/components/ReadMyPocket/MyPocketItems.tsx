import MyPocketItem from './MyPocketItem';

type MyPocketItemsProps = {
  tabIndex: number;
  pocketData: {
    id: number;
    pocket: string;
    senderNickname: string;
    status: string;
  }[];
};

const MyPocketItems = ({ tabIndex, pocketData }: MyPocketItemsProps) => {
  return (
    <>
      {/* 각 탭마다 복주머니가 없을 경우 */}
      {pocketData.length === 0 && tabIndex === 0 && (
        <li>받은 복주머니가 없습니다!</li>
      )}
      {pocketData.length === 0 && tabIndex === 1 && (
        <li>읽은 복주머니가 없습니다!</li>
      )}
      {pocketData.length === 0 && tabIndex === 2 && (
        <li>읽지 않은 복주머니가 없습니다!</li>
      )}

      {/* 복주머니가 있을 때 */}
      {pocketData.length !== 0 &&
        pocketData.map((item) => (
          <MyPocketItem
            key={item.id}
            id={item.id}
            pocket={item.pocket}
            senderNickname={item.senderNickname}
            status={item.status}
          />
        ))}
    </>
  );
};

export default MyPocketItems;
