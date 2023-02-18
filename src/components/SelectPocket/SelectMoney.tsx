import { useState } from 'react';
import { SelectMoneyFieldSet } from '@/components/SelectPocket/index.style';
import { Radio } from '@/components/SelectPocket/RadioBtn/Radio';
import { RadioGroup } from '@/components/SelectPocket/RadioBtn/RadioGroup';

const MONEY_LIST = [
  { value: '1000won', check: false },
  { value: '5000won', check: false },
  { value: '10000won', check: false },
  { value: '50000won', check: false },
  { value: 'none', check: true },
];

const SelectMoney = (money: { money: string }) => {
  const [moneyValue, setMoneyValue] = useState('none');

  MONEY_LIST.map((i: { value: string; check: boolean }) => {
    if (i.value === money.money) return (i.check = true);
    else return (i.check = false);
  });

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
