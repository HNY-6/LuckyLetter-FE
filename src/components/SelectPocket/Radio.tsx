import { useContext } from "react";
import RadioContext from "./RadioContext";
import { PocketProperty } from "@/components/button/index.style";
import { RadioInput, RadioLabel } from "./index.style";

interface SelectPocketType {
  value: string;
  name: string;
}

export const Radio = (props: SelectPocketType) => {
  const group: any = useContext(RadioContext);
  return (
    <RadioLabel>
      <RadioInput
        type='radio'
        value={props.value}
        name={props.name}
        checked={
          group.value !== undefined ? props.value === group.value : undefined
        }
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      <PocketProperty color={props.value} />
    </RadioLabel>
  );
};
