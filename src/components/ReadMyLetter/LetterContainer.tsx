import styled, { css } from "styled-components";

import LetterContent from "./LetterContent";

import RedLetterBackground from "@/assets/Pocket_Red_letter.png";
import OrangeLetterBackground from "@/assets/Pocket_Orange_letter.png";
import YellowLetterBackground from "@/assets/Pocket_Yellow_letter.png";
import GreenLetterBackground from "@/assets/Pocket_Green_letter.png";
import NavyLetterBackground from "@/assets/Pocket_Navy_letter.png";

const LetterBox = styled.div`
  margin-bottom: 57px;
  padding: 145px 30px 30px;
  width: 330px;
  height: 465px;

  // props인 color를 전달받아 편지지 이미지 렌더링
  ${(props) =>
    props.color === "red" &&
    css`
      background-image: url(${RedLetterBackground});
    `}
  ${(props) =>
    props.color === "orange" &&
    css`
      background-image: url(${OrangeLetterBackground});
    `}
  ${(props) =>
    props.color === "yellow" &&
    css`
      background-image: url(${YellowLetterBackground});
    `}
  ${(props) =>
    props.color === "green" &&
    css`
      background-image: url(${GreenLetterBackground});
    `}
  ${(props) =>
    props.color === "navy" &&
    css`
      background-image: url(${NavyLetterBackground});
      color: var(--bg-color);
    `}
`;

const LetterContainer = () => {
  return (
    <LetterBox color="navy">
      <LetterContent color="navy" />
    </LetterBox>
  );
};

export default LetterContainer;
