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

const MyPocketItem = (props: MyPocketItemType) => {
  return (
    <Link to={`/mypocket/${props.id}`} state={{ color: props.color }}>
      <MyPocketItemStyle isRead={props.isRead}>
        {props.color === 'red' && <PocketRedImg />}
        {props.color === 'yellow' && <PocketYellowImg />}
        {props.color === 'orange' && <PocketOrangeImg />}
        {props.color === 'green' && <PocketGreenImg />}
        {props.color === 'navy' && <PocketBlueImg />}
        <span>{props.author}</span>
      </MyPocketItemStyle>
    </Link>
  );
};

export default MyPocketItem;
