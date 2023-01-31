import { Link } from "react-router-dom";
import {
  PocketOrangeImg,
  PocketBlueImg,
  PocketGreenImg,
  PocketRedImg,
  PocketYellowImg,
  Money1000Img,
  MoneyDefaultImg,
  Money5000Img,
  Money10000Img,
  Money50000Img,
  DogGreenStampImg,
  DogRedStampImg,
  DogWhiteStampImg,
  DogOrangeStampImg,
  DogYellowStampImg,
  LogoutBtn,
  CopyLinkBtn,
  SelectMarkImg,
  ArrowBackBtn,
} from "@/components/button/index.style";
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>임시로 만들어둔 페이지입니다.</p>
      <PocketOrangeImg></PocketOrangeImg>
      <PocketBlueImg></PocketBlueImg>
      <PocketGreenImg></PocketGreenImg>
      <PocketRedImg></PocketRedImg>
      <PocketYellowImg></PocketYellowImg>
      <MoneyDefaultImg></MoneyDefaultImg>
      <Money1000Img></Money1000Img>
      <Money5000Img></Money5000Img>
      <Money10000Img></Money10000Img>
      <Money50000Img></Money50000Img>
      <DogGreenStampImg></DogGreenStampImg>
      <DogYellowStampImg></DogYellowStampImg>
      <DogOrangeStampImg></DogOrangeStampImg>
      <DogWhiteStampImg></DogWhiteStampImg>
      <DogRedStampImg></DogRedStampImg>
      <LogoutBtn></LogoutBtn>
      <CopyLinkBtn></CopyLinkBtn>
      <SelectMarkImg></SelectMarkImg>
      <ArrowBackBtn></ArrowBackBtn>
      <Link to="/login">이동</Link>
    </div>
  );
};

export default Home;
