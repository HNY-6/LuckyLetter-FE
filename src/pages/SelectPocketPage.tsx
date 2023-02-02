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
  SelectMoneyFieldSet,
  SelectPocketFieldSet,
  SelectPocketSpan,
  SelectPocketForm,
} from "@/components/SelectPocket/index.style";

const SelectPocketPage = () => {
  return (
    <>
      <SelectPocketForm>
        <ArrowBackBtn />
        <SelctPocketTitle>
          <SelectPocketSpan>복주머니</SelectPocketSpan>와
          <SelectPocketSpan> 세뱃돈</SelectPocketSpan>을<br /> 선택해주세요!
        </SelctPocketTitle>
        <SelectPocketFieldSet>
          <PocketRedImg></PocketRedImg>
          <PocketBlueImg></PocketBlueImg>
          <PocketGreenImg></PocketGreenImg>
          <PocketYellowImg></PocketYellowImg>
          <PocketOrangeImg></PocketOrangeImg>
        </SelectPocketFieldSet>
        <SelectMoneyFieldSet>
          <Money1000Img></Money1000Img>
          <Money5000Img></Money5000Img>
          <Money10000Img></Money10000Img>
          <Money50000Img></Money50000Img>
          <MoneyDefaultImg></MoneyDefaultImg>
        </SelectMoneyFieldSet>
        <DefaultButton label={`다음`} />
      </SelectPocketForm>
    </>
  );
};

export default SelectPocketPage;
