import { Link } from "react-router-dom";
import styled from "styled-components";
import bgSelectPocket from "@/assets/Select_Pocket_BG.png";

export const SelectPocketForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 104px 0px 85px;
`;

export const SelctPocketTitle = styled.h2`
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
