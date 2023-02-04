import styled from "styled-components";
import button from "@/assets/btn_sprites.png";

// Pocket
export const PocketProperty = styled.div`
  width: 80px;
  height: 71px;
  cursor: pointer;
  position: relative;
  ${(props) => {
    switch (props.color) {
      case "redPocket":
        return `background: url(${button}) -10px -101px`;
      case "bluePocket":
        return `background: url(${button}) -210px -10px`;
      case "greenPocket":
        return `background: url(${button}) -110px -101px`;
      case "yellowPocket":
        return `background: url(${button}) -110px -10px;`;
      case "orangePocket":
        return `background: url(${button}) -10px -10px;`;
    }
  }}
`;

export const PocketOrangeImg = styled(PocketProperty)`
  background: url(${button}) -10px -10px;
`;

export const PocketYellowImg = styled(PocketProperty)`
  background: url(${button}) -110px -10px;
`;

export const PocketRedImg = styled(PocketProperty)`
  background: url(${button}) -10px -101px;
`;

export const PocketGreenImg = styled(PocketProperty)`
  background: url(${button}) -110px -101px;
`;

export const PocketBlueImg = styled(PocketProperty)`
  background: url(${button}) -210px -10px;
`;

// Money

const MoneyProperty = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
`;

export const MoneyDefaultImg = styled(MoneyProperty)`
  background: url(${button}) -10px -192px;
`;

export const Money1000Img = styled(MoneyProperty)`
  background: url(${button}) -310px -150px;
`;

export const Money5000Img = styled(MoneyProperty)`
  background: url(${button}) -310px -80px;
`;

export const Money10000Img = styled(MoneyProperty)`
  background: url(${button}) -130px -192px;
`;

export const Money50000Img = styled(MoneyProperty)`
  background: url(${button}) -310px -10px;
`;

// 개발바닥

const DogStampProperty = styled.div`
  width: 42px;
  height: 42px;
`;

export const DogRedStampImg = styled(DogStampProperty)`
  background: url(${button}) -97px -262px;
`;

export const DogWhiteStampImg = styled(DogStampProperty)`
  background: url(${button}) -159px -262px;
`;

export const DogOrangeStampImg = styled(DogStampProperty)`
  background: url(${button}) -221px -262px;
`;

export const DogGreenStampImg = styled(DogStampProperty)`
  background: url(${button}) -283px -262px;
`;

export const DogYellowStampImg = styled(DogStampProperty)`
  background: url(${button}) -345px -262px;
`;

// 로그인 링크복사 뒤로가기 체크버튼

export const ArrowBackBtn = styled.div`
  width: 32px;
  height: 32px;
  background: url(${button}) -10px -348px;
  position: absolute;
  cursor: pointer;
`;

export const SelectMarkImg = styled.div`
  width: 40px;
  height: 40px;
  background: url(${button}) -250px -192px;
`;

export const CopyLinkBtn = styled.div`
  width: 67px;
  height: 66px;
  background: url(${button}) -210px -101px;
`;

export const LogoutBtn = styled.div`
  width: 67px;
  height: 66px;
  background: url(${button}) -10px -262px;
`;
