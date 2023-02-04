import { useState } from "react";
import { SelectMoneyFieldSet } from "./index.style";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

const MONEY_LIST = [
  { value: "1000won", check: false },
  { value: "5000won", check: false },
  { value: "10000won", check: false },
  { value: "50000won", check: false },
  { value: "none", check: true },
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
          <Radio
            key={item.value}
            name='selectMoney'
            value={item.value}
            defaultChecked={item.check}
          ></Radio>
        ))}
      </RadioGroup>
    </SelectMoneyFieldSet>
  );
};

export default SelectMoney;
