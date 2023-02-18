import { useState } from 'react';
import { SelectPocketFieldSet } from '@/components/SelectPocket/index.style';
import { Radio } from '@/components/SelectPocket/RadioBtn/Radio';
import { RadioGroup } from '@/components/SelectPocket/RadioBtn/RadioGroup';

const POCKET_LIST = [
  { value: 'redPocket', check: false },
  { value: 'bluePocket', check: false },
  { value: 'greenPocket', check: false },
  { value: 'yellowPocket', check: false },
  { value: 'orangePocket', check: false },
];

const SelectPocket = (pocket: { pocket: string }) => {
  const [pocketValue, setPocketValue] = useState(
    pocket.pocket !== 'redPocket' ? pocket.pocket : 'redPocket'
  );
  pocket.pocket !== 'redPocket'
    ? POCKET_LIST.map((i: { value: string; check: boolean }) => {
        if (i.value === pocket.pocket) i.check = true;
      })
    : (POCKET_LIST[0].check = true);
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
