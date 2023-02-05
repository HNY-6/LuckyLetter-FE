import { Link } from "react-router-dom";
import styled from "styled-components";
import bgSelectPocket from "@/assets/pocket-select-box-bg.png";
import button from "@/assets/common-btn_sprites.png";

export const SelectPocketForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 104px 0px 85px;
`;

export const SelctPocketTitle = styled.span`
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 40px;
`;

export const SelectPocketSpan = styled(SelctPocketTitle)`
  display: inline;
  color: var(--main-color);
`;

export const SelectPocketFieldSet = styled.fieldset`
  width: 330px;
  height: 285px;
  background-image: url(${bgSelectPocket});
  padding: 48px 26.96px 77px;
  display: flex;
  flex-wrap: wrap;
  gap: 16.97px;
  justify-content: center;
  margin-bottom: 60px;
`;

export const SelectMoneyFieldSet = styled.fieldset`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 45px;
`;

export const RadioLabel = styled.label``;
export const RadioInput = styled.input`
  position: absolute;
  left: -9999px;
  &:checked + div:after {
    content: "";
    background: url(${button}) -250px -192px;
    position: absolute;
    width: 40px;
    height: 40px;
    ${(props) => {
      switch (props.name) {
        case "selectPocket":
          return `top: 2px;`;
        case "selectMoney":
          return `top: 5px; right: 30px`;
      }
    }}
  }
`;
