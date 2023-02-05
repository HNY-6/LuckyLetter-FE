import styled, { CSSProperties } from 'styled-components';

export const DefaultButtonStyle = styled.button<{
  styleOverrides?: CSSProperties;
}>`
  position: relative;
  display: block;
  width: 330px;
  height: 50px;
  border-radius: 12px;
  font-size: 16px;
  color: var(--bg-color);
  background-color: var(--main-color);
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
