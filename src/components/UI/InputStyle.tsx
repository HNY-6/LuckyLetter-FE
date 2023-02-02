import styled from "styled-components";

export const ValidationLabelStyle = styled.label`
  display: block;
  padding-top: 40px;
  color: var(--sub-text-b);
`;

export const ValidationInputStyle = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--main-title-color);
  height: 32px;

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
  font-family: "Pretendard";

  &::after {
    content: "*";
    color: var(--warning-color);
  }
`;
