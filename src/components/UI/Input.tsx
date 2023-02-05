import { CSSProperties } from 'styled-components';
import {
  ValidationErrorTextStyle,
  ValidationInputStyle,
  ValidationLabelStyle,
  ValidationTextStyle,
  ValidationWarningTextStyle,
} from './InputStyle';

interface Props {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  styleOverrides?: CSSProperties;
  asterisk: boolean;
}

const ValidationInput = ({
  label,
  placeholder,
  errorMessage,
  styleOverrides,
  asterisk,
}: Props) => {
  console.log(asterisk);

  return (
    <ValidationLabelStyle>
      {asterisk ? (
        <ValidationWarningTextStyle>{label}</ValidationWarningTextStyle>
      ) : (
        <ValidationTextStyle>{label}</ValidationTextStyle>
      )}
      <ValidationInputStyle placeholder={placeholder} />
      <ValidationErrorTextStyle styleOverrides={styleOverrides}>
        {errorMessage}
      </ValidationErrorTextStyle>
    </ValidationLabelStyle>
  );
};
export default ValidationInput;
