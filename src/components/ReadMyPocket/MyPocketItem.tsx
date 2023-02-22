import * as S from './styles/ReadMyPocket.styled';
import {
  PocketOrangeImg,
  PocketYellowImg,
  PocketRedImg,
  PocketGreenImg,
  PocketBlueImg,
} from '@/components/button/index.style';
import { Link } from 'react-router-dom';

interface MyPocketItemType {
  id: number;
  pocket: string;
  senderNickname: string;
  status: string;
  children?: React.ReactNode;
}

const MyPocketItem = ({
  id,
  pocket,
  senderNickname,
  status,
}: MyPocketItemType) => {
  return (
    <Link to={`/mypocket/${id}`} state={{ pocket: pocket }}>
      <S.MyPocketItem status={status}>
        {pocket === 'red' && <PocketRedImg />}
        {pocket === 'yellow' && <PocketYellowImg />}
        {pocket === 'orange' && <PocketOrangeImg />}
        {pocket === 'green' && <PocketGreenImg />}
        {pocket === 'navy' && <PocketBlueImg />}
        <span>{senderNickname}</span>
      </S.MyPocketItem>
    </Link>
  );
};

export default MyPocketItem;
