import { useEffect, useState } from "react";
import { SelectPocketFieldSet } from "@/components/SelectPocket/index.style";
import { Radio } from "@/components/SelectPocket/RadioBtn/Radio";
import { RadioGroup } from "@/components/SelectPocket/RadioBtn/RadioGroup";

const POCKET_LIST = [
  { value: "redPocket", check: true },
  { value: "bluePocket", check: false },
  { value: "greenPocket", check: false },
  { value: "yellowPocket", check: false },
  { value: "orangePocket", check: false },
];

const SelectPocket = () => {
  const [pocketValue, setPocketValue] = useState("redPocket");

  return (
    <SelectPocketFieldSet>
      <RadioGroup
        label='복주머니 선택'
        value={pocketValue}
        onChange={setPocketValue}
      >
        {POCKET_LIST.map((item) => (
          <Radio
            key={item.value}
            name='selectPocket'
            value={item.value}
            defaultChecked={item.check}
          />
        ))}
      </RadioGroup>
    </SelectPocketFieldSet>
  );
};

export default SelectPocket;
