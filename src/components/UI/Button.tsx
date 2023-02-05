import { CSSProperties } from 'styled-components';
import { DefaultButtonStyle } from './ButtonStyle';
import { ReactNode } from 'react';

interface Props {
  label: string;
  icon?: ReactNode;
  styleOverrides?: CSSProperties;
}

const DefaultButton = ({
  label,
  icon,
  styleOverrides,
  ...rest
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <DefaultButtonStyle styleOverrides={styleOverrides} {...rest}>
      {icon && icon}
      <div>
        {/* {centerIcon && centerIcon} */}
        <p>{label}</p>
      </div>
    </DefaultButtonStyle>
  );
};
export default DefaultButton;
