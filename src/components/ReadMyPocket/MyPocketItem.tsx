import MyPocketItemStyle from './MyPocketItemStyle';
import {
  PocketOrangeImg,
  PocketYellowImg,
  PocketRedImg,
  PocketGreenImg,
  PocketBlueImg,
} from '@/components/button/index.style';
import { Link } from 'react-router-dom';

interface MyPocketItemType {
  key: number;
  id: number;
  color: string;
  author: string;
  isRead: boolean;
  children?: React.ReactNode;
}

const MyPocketItem = ({ id, color, author, isRead }: MyPocketItemType) => {
  return (
    <Link to={`/mypocket/${id}`} state={{ color: color }}>
      <MyPocketItemStyle isRead={isRead}>
        {color === 'red' && <PocketRedImg />}
        {color === 'yellow' && <PocketYellowImg />}
        {color === 'orange' && <PocketOrangeImg />}
        {color === 'green' && <PocketGreenImg />}
        {color === 'navy' && <PocketBlueImg />}
        <span>{author}</span>
      </MyPocketItemStyle>
    </Link>
  );
};

export default MyPocketItem;
