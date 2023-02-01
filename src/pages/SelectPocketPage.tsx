import DefaultButton from "@/components/UI/Button";
import {
  PocketOrangeImg,
  PocketRedImg,
  PocketBlueImg,
  PocketGreenImg,
  PocketYellowImg,
  Money1000Img,
  Money5000Img,
  Money10000Img,
  Money50000Img,
  MoneyDefaultImg,
  ArrowBackBtn,
} from "@/components/button/index.style";
import {
  SelctPocketTitle,
  SelectMoneyBox,
  SelectPocketBox,
  SelectPocketSpan,
  SelectPocketWrapper,
} from "@/components/SelectPocket/index.style";

const SelectPocketPage = () => {
  return (
    <>
      <SelectPocketWrapper>
        <ArrowBackBtn />
        <SelctPocketTitle>
          <SelectPocketSpan>복주머니</SelectPocketSpan>와
          <SelectPocketSpan> 세뱃돈</SelectPocketSpan>을<br /> 선택해주세요!
        </SelctPocketTitle>
        <SelectPocketBox>
          <PocketRedImg></PocketRedImg>
          <PocketBlueImg></PocketBlueImg>
          <PocketGreenImg></PocketGreenImg>
          <PocketYellowImg></PocketYellowImg>
          <PocketOrangeImg></PocketOrangeImg>
        </SelectPocketBox>
        <SelectMoneyBox>
          <Money1000Img></Money1000Img>
          <Money5000Img></Money5000Img>
          <Money10000Img></Money10000Img>
          <Money50000Img></Money50000Img>
          <MoneyDefaultImg></MoneyDefaultImg>
        </SelectMoneyBox>
        <DefaultButton label={`다음`} />
      </SelectPocketWrapper>
    </>
  );
};

export default SelectPocketPage;
