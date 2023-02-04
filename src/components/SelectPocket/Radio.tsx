import { useContext } from "react";
import RadioContext from "./RadioContext";

interface SelectPocketType {
  value: string;
  disabled: boolean;
}

export const Radio = (props: SelectPocketType) => {
  const group: any = useContext(RadioContext);
  return (
    <label>
      <input
        type='radio'
        value={props.value}
        disabled={props.disabled || group.disabled}
        checked={
          group.value !== undefined ? props.value === group.value : undefined
        }
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
      />
    </label>
  );
};
