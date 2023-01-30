import MyPocketItemStyle from "./MyPocketItemStyle";
import {
  PocketOrangeImg,
  PocketYellowImg,
  PocketRedImg,
  PocketGreenImg,
  PocketBlueImg,
} from "../button/Button";

interface MyPocketItemType {
  key: number;
  color: string;
  author: string;
  isRead: boolean;
  children?: React.ReactNode;
}

const MyPocketItem = (props: MyPocketItemType) => {
  return (
    <MyPocketItemStyle isRead={props.isRead}>
      {props.color === "red" && <PocketRedImg />}
      {props.color === "yellow" && <PocketYellowImg />}
      {props.color === "orange" && <PocketOrangeImg />}
      {props.color === "green" && <PocketGreenImg />}
      {props.color === "navy" && <PocketBlueImg />}
      <span>{props.author}</span>
    </MyPocketItemStyle>
  );
};

export default MyPocketItem;
