import {
  ValidationInputStyle,
  ValidationLabelStyle,
  ValidationTextStyle,
} from "./InputStyle";

interface Props {
  label: string;
}

const ValidationInput = ({ label }: Props) => {
  return (
    <ValidationLabelStyle>
      <ValidationTextStyle>{label}</ValidationTextStyle>
      <ValidationInputStyle />
    </ValidationLabelStyle>
  );
};
export default ValidationInput;
