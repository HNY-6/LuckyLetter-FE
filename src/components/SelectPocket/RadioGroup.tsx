import RadioContext from "./RadioContext";

interface RadioGroupType {
  label: string;
  children: any;
  value: any;
  onChange: any;
}

export const RadioGroup = (props: RadioGroupType) => {
  return (
    <fieldset>
      <legend>{props.label}</legend>
      <RadioContext.Provider value={props.value}>
        {props.children}
      </RadioContext.Provider>
    </fieldset>
  );
};
