import { useContext } from "react";
import RadioContext from "./RadioContext";
import { MoneyProperty, PocketProperty } from "@/components/button/index.style";
import { RadioInput, RadioLabel } from "./index.style";

interface SelectPocketType {
  value: string;
  name: string;
  defaultChecked: boolean;
}

export const Radio = (props: SelectPocketType) => {
  const group: any = useContext(RadioContext);
  return (
    <RadioLabel>
      <RadioInput
        type='radio'
        value={props.value}
        defaultChecked={props.defaultChecked}
        name={props.name}
        checked={
          group.value !== undefined ? props.value === group.value : undefined
        }
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
      {props.name == "selectPocket" ? (
        <PocketProperty color={props.value} />
      ) : (
        <MoneyProperty color={props.value} />
      )}
    </RadioLabel>
  );
};
