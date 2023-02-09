import styled from 'styled-components';

import RedLetterBackground from '@/assets/letter-red_bg.png';
import OrangeLetterBackground from '@/assets/letter-orange_bg.png';
import YellowLetterBackground from '@/assets/letter-yellow_bg.png';
import GreenLetterBackground from '@/assets/letter-green_bg.png';
import NavyLetterBackground from '@/assets/letter-navy_bg.png';

// ReadMyLetter 페이지 버튼
export const LetterButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// ReadMyLetter 편지지
export const LetterBox = styled.div`
  margin-bottom: 57px;
  padding: 145px 30px 30px;
  width: 330px;
  height: 465px;

  ${({ color }) => {
    switch (color) {
      case 'red':
        return `background-image: url(${RedLetterBackground});`;
      case 'orange':
        return `background-image: url(${OrangeLetterBackground})`;
      case 'yellow':
        return `background-image: url(${YellowLetterBackground})`;
      case 'green':
        return `background-image: url(${GreenLetterBackground})`;
      case 'navy':
        return `background-image: url(${NavyLetterBackground});
        color: var(--bg-color);`;
    }
  }}
`;

// 편지 전체 그리드 박스
export const LetterGridBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  height: 100%;
`;

// 편지 수신자(To)
export const LetterToParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`;

// 편지 내용
export const LetterContentParagraph = styled.p`
  line-height: 1.5;
  overflow: scroll;
  font-size: 16px;
  -webkit-line-clamp: 9;
`;

// 편지 발신자(From)
export const LetterFromBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  justify-self: flex-end;
  align-self: flex-end;
`;

export const LetterFromParagraph = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
