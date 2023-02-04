import { useEffect, useState } from "react";
import { SelectPocketFieldSet } from "./index.style";
import { Radio } from "./Radio";
import { RadioGroup } from "./RadioGroup";

const POCKET_LIST = [
  { value: "redPocket" },
  { value: "bluePocket" },
  { value: "greenPocket" },
  { value: "yellowPocket" },
  { value: "orangePocket" },
];

const SelectPocket = () => {
  const [pocketValue, setPocketValue] = useState("redPocket");

  useEffect(() => {
    console.log(pocketValue);
  }, [pocketValue]);

  return (
    <SelectPocketFieldSet>
      <RadioGroup
        label='복주머니 선택'
        value={pocketValue}
        onChange={setPocketValue}
      >
        {POCKET_LIST.map((item) => (
          <Radio key={item.value} name='selectPocket' value={item.value} />
        ))}
      </RadioGroup>
    </SelectPocketFieldSet>
  );
};

export default SelectPocket;
