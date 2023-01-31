import styled from "styled-components";
import bgSelectPocket from "@/assets/Select_Pocket_BG.png";

export const SelectPocketWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 104px 30px 85px;
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

export const SelectPocketBox = styled.div`
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

export const SelectMoneyBox = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 45px;
`;
