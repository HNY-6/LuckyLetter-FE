import { UseFormRegisterReturn } from 'react-hook-form';
import { CSSProperties } from 'styled-components';
import {
  ValidationErrorTextStyle,
  ValidationInputStyle,
  ValidationLabelStyle,
  ValidationTextStyle,
  ValidationWarningTextStyle,
} from './InputStyle';

interface Props {
  type?: string;
  label: string;
  placeholder?: string;
  errorMessage?: string;
  styleOverrides?: CSSProperties;
  asterisk: boolean;
  register?: UseFormRegisterReturn;
}

const ValidationInput = ({
  type,
  label,
  placeholder,
  errorMessage,
  styleOverrides,
  asterisk,
  register,
}: Props) => {
  return (
    <ValidationLabelStyle>
      {asterisk ? (
        <ValidationWarningTextStyle>{label}</ValidationWarningTextStyle>
      ) : (
        <ValidationTextStyle>{label}</ValidationTextStyle>
      )}
      <ValidationInputStyle
        {...register}
        type={type}
        placeholder={placeholder}
      />
      <ValidationErrorTextStyle styleOverrides={styleOverrides}>
        {errorMessage}
      </ValidationErrorTextStyle>
    </ValidationLabelStyle>
  );
};
export default ValidationInput;
