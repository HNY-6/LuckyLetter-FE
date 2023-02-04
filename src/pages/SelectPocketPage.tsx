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

const POCKET_LIST = [
  { name: "pocket", value: "redpocket" },
  { name: "pocket", value: "bluepocket" },
  { name: "pocket", value: "greenpocket" },
  { name: "pocket", value: "yellopocket" },
  { name: "pocket", value: "orangepocket" },
];

const SelectPocketPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("redPocket");
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/writeletter");
  };
  return (
    <>
      <SelectPocketForm>
        <ArrowBackBtn />
        <SelctPocketTitle>
          <SelectPocketSpan>복주머니</SelectPocketSpan>와
          <SelectPocketSpan> 세뱃돈</SelectPocketSpan>을<br /> 선택해주세요!
        </SelctPocketTitle>
        <RadioGroup label='복주머니 선택' value={value} onChange={setValue}>
          <Radio value='redPocket' disabled={false}></Radio>
          <Radio value='bluePocket' disabled={false}></Radio>
          <Radio value='greenPocket' disabled={false}></Radio>
          <Radio value='yellowPocket' disabled={false}></Radio>
          <Radio value='orangePocket' disabled={false}></Radio>
        </RadioGroup>
        {/* <SelectPocketFieldSet>
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
        </SelectMoneyFieldSet> */}
        <DefaultButton onClick={onSubmit} label={`다음`} />
      </SelectPocketForm>
    </>
  );
};

export default SelectPocketPage;
