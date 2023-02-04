import { SelectPocketFieldSet } from "./index.style";
import RadioContext from "./RadioContext";

interface RadioGroupType {
  label: string;
  children: any;
  value: any;
  onChange: any;
}

export const RadioGroup = (props: RadioGroupType) => {
  return (
    <SelectPocketFieldSet>
      <legend className='ir'>{props.label}</legend>
      <RadioContext.Provider value={props.value}>
        {props.children}
      </RadioContext.Provider>
    </SelectPocketFieldSet>
  );
};
