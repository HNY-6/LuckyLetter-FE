import styled, { CSSProperties } from 'styled-components';

const DefaultIconStyle = styled.img<{
  styleOverrides?: CSSProperties;
}>`
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translate(0%, -50%);
  height: 24px;
  width: 24px;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
export default DefaultIconStyle;
