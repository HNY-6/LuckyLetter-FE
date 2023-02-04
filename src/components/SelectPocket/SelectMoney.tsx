import { useState } from "react";
import { SelectMoneyFieldSet } from "./index.style";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

const MONEY_LIST = [
  { value: "1000won" },
  { value: "5000won" },
  { value: "10000won" },
  { value: "50000won" },
  { value: "none" },
];

const SelectMoney = () => {
  const [moneyValue, setMoneyValue] = useState("1000");
  return (
    <SelectMoneyFieldSet>
      <RadioGroup
        label='세뱃돈 선택'
        value={moneyValue}
        onChange={setMoneyValue}
      >
        {MONEY_LIST.map((item) => (
          <Radio key={item.value} name='selectMoney' value={item.value}></Radio>
        ))}
      </RadioGroup>
    </SelectMoneyFieldSet>
  );
};

export default SelectMoney;
