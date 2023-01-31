import styled from "styled-components";
import DefaultButton from "../UI/Button";

const LetterButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LetterButton = () => {
  return (
    <LetterButtonBox>
      <DefaultButton
        label="삭제"
        styleOverrides={{
          width: 155,
          padding: "16px 63px",
          backgroundColor: "var(--warning-color);",
        }}
      />
      <DefaultButton
        label="확인"
        styleOverrides={{ width: 155, padding: "16px 63px" }}
      />
    </LetterButtonBox>
  );
};

export default LetterButton;
