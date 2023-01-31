import WrapperBox from "@/components/UI/WrapperBox";
import styled from "styled-components";
import bgSelectPocket from "@/assets/Select_Pocket_BG.png";
import {
  PocketOrangeImg,
  PocketRedImg,
  PocketBlueImg,
  PocketGreenImg,
  PocketYellowImg,
} from "@/components/button/index.style";

const SelectPocketWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 104px 30px 85px;
`;

const SelctPocketTitle = styled.h2`
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 25px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 40px;
`;

const SelectPocketSpan = styled(SelctPocketTitle)`
  display: inline;
  color: var(--main-color);
`;

const SelectPocketBox = styled.div`
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

const SelectPocketPage = () => {
  return (
    <WrapperBox>
      <SelectPocketWrapper>
        <SelctPocketTitle>
          <SelectPocketSpan>복주머니</SelectPocketSpan>와
          <SelectPocketSpan> 세뱃돈</SelectPocketSpan>을<br /> 선택해주세요!
        </SelctPocketTitle>
        <SelectPocketBox>
          <PocketRedImg></PocketRedImg>
          <PocketBlueImg></PocketBlueImg>
          <PocketGreenImg></PocketGreenImg>
          <PocketYellowImg></PocketYellowImg>
          <PocketOrangeImg></PocketOrangeImg>
        </SelectPocketBox>
      </SelectPocketWrapper>
    </WrapperBox>
  );
};

export default SelectPocketPage;
