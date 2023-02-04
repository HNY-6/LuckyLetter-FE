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
import { useNavigate } from "react-router-dom";
import { Radio } from "@/components/SelectPocket/Radio";
import { RadioGroup } from "@/components/SelectPocket/RadioGroup";
import { useState } from "react";
import SelectPocket from "@/components/SelectPocket/SelectPocket";
import SelectMoney from "@/components/SelectPocket/SelectMoney";

const SelectPocketPage = () => {
  const navigate = useNavigate();
  const [pocketValue, setPocketValue] = useState("redPocket");
  const [moneyValue, setMoneyValue] = useState("1000");
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate("/writeletter");
    const target = e.target as typeof e.target & {
      selectPocket: { value: string };
      selectMoney: { value: string };
    };
    console.log(target.selectPocket.value, target.selectMoney.value);
  };
  return (
    <>
      <SelectPocketForm onSubmit={onSubmit}>
        <ArrowBackBtn />
        <SelctPocketTitle>
          <SelectPocketSpan>복주머니</SelectPocketSpan>와
          <SelectPocketSpan> 세뱃돈</SelectPocketSpan>을<br /> 선택해주세요!
        </SelctPocketTitle>
        <SelectPocket />
        <SelectMoney />

        <DefaultButton label={`다음`} />
      </SelectPocketForm>
    </>
  );
};

export default SelectPocketPage;
