import styled, { css } from 'styled-components';

import LetterContent from './LetterContent';

import RedLetterBackground from '@/assets/letter-red_bg.png';
import OrangeLetterBackground from '@/assets/letter-orange_bg.png';
import YellowLetterBackground from '@/assets/letter-yellow_bg.png';
import GreenLetterBackground from '@/assets/letter-green_bg.png';
import NavyLetterBackground from '@/assets/letter-navy_bg.png';

const LetterBox = styled.div`
  margin-bottom: 57px;
  padding: 145px 30px 30px;
  width: 330px;
  height: 465px;

  // props인 color를 전달받아 편지지 이미지 렌더링
  ${(props) =>
    props.color === 'red' &&
    css`
      background-image: url(${RedLetterBackground});
    `}
  ${(props) =>
    props.color === 'orange' &&
    css`
      background-image: url(${OrangeLetterBackground});
    `}
  ${(props) =>
    props.color === 'yellow' &&
    css`
      background-image: url(${YellowLetterBackground});
    `}
  ${(props) =>
    props.color === 'green' &&
    css`
      background-image: url(${GreenLetterBackground});
    `}
  ${(props) =>
    props.color === 'navy' &&
    css`
      background-image: url(${NavyLetterBackground});
      color: var(--bg-color);
    `}
`;

const LetterContainer = (props: { color: string }) => {
  return (
    <LetterBox color={props.color}>
      <LetterContent color={props.color} />
    </LetterBox>
  );
};

export default LetterContainer;
