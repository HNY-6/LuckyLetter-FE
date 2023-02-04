import { SelectPocketFieldSet } from "./index.style";
import RadioContext from "./RadioContext";

interface RadioGroupType {
  label: string;
  children: any;
  value: string;
  onChange: any;
}

export const RadioGroup = (props: RadioGroupType) => {
  return (
    <>
      <legend className='ir'>{props.label}</legend>
      <RadioContext.Provider value={props.value}>
        {props.children}
      </RadioContext.Provider>
    </>
  );
};
