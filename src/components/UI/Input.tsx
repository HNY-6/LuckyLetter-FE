import {
  ValidationErrorTextStyle,
  ValidationInputStyle,
  ValidationLabelStyle,
  ValidationTextStyle,
} from './InputStyle';

interface Props {
  label: string;
  placeholder?: string;
  errorMessage?: string;
}

const ValidationInput = ({ label, placeholder, errorMessage }: Props) => {
  return (
    <ValidationLabelStyle>
      <ValidationTextStyle>{label}</ValidationTextStyle>
      <ValidationInputStyle placeholder={placeholder} />
      <ValidationErrorTextStyle>{errorMessage}</ValidationErrorTextStyle>
    </ValidationLabelStyle>
  );
};
export default ValidationInput;
