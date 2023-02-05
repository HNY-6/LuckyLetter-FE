import styled, { CSSProperties } from 'styled-components';

export const ValidationLabelStyle = styled.label`
  display: block;
  padding-top: 40px;
  color: var(--sub-text-b);
`;

export const ValidationInputStyle = styled.input`
  width: 100%;
  height: 32px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--main-title-color);
  font-size: 16px;
  margin-top: 16px;
  padding-left: 2px;

  &:focus {
    border-bottom: 1px solid var(--main-title-color);
  }
  &:hover {
    border-color: var(--main-title-color);
  }
`;

export const ValidationTextStyle = styled.strong`
  font-weight: bold;
  font-size: 16px;
  font-family: 'Pretendard';
`;

export const ValidationWarningTextStyle = styled.strong`
  font-weight: bold;
  font-size: 16px;
  font-family: 'Pretendard';

  &::after {
    content: '*';
    color: var(--warning-color);
  }
`;

export const ValidationErrorTextStyle = styled.div<{
  styleOverrides?: CSSProperties;
}>`
  color: var(--warning-color);
  font-size: 14px;
  margin-top: 5px;
  padding-left: 2px;
  word-break: keep-all;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
