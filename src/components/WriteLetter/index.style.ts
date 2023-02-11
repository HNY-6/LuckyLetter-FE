import { DogStampProperty } from './../button/index.style';
import styled from 'styled-components';
import yellorLetter from '@/assets/letter-yellow_bg.png';
import redLetter from '@/assets/letter-red_bg.png';
import orangeLetter from '@/assets/letter-orange_bg.png';
import navyLetter from '@/assets/letter-navy_bg.png';
import greenLetter from '@/assets/letter-green_bg.png';
import button from '@/assets/common-btn_sprites.png';

export const LetterBox = styled.div`
  width: 330px;
  height: 465px;
  margin-bottom: 40px;
  padding: 145px 30px 30px;
  ${(props) => {
    switch (props.color) {
      case 'yellowPocket':
        return `background: url(${yellorLetter});`;
      case 'bluePocket':
        return `background: url(${navyLetter});`;
      case 'greenPocket':
        return `background: url(${greenLetter});`;
      case 'redPocket':
        return `background: url(${redLetter});`;
      case 'orangePocket':
        return `background: url(${orangeLetter});`;
    }
  }}
`;

export const ReceiverParagraph = styled.p`
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: left;
  margin-bottom: 20px;
`;

export const LetterContentParagraph = styled.textarea`
  width: 270px;
  height: 176px;
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const LetterStamp = styled(DogStampProperty)`
  float: right;
  ${(props) => {
    switch (props.color) {
      case 'yellowPocket':
        return ` background: url(${button}) -345px -262px;`;
      case 'bluePocket':
        return ` background: url(${button}) -159px -262px;`;
      case 'greenPocket':
        return `background: url(${button}) -283px -262px;`;
      case 'redPocket':
        return `background: url(${button}) -97px -262px;`;
      case 'orangePocket':
        return `background: url(${button}) -221px -262px;`;
    }
  }}
`;

export const LetterSenderParagraph = styled.p`
  display: inline-block;
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-weight: 700;
  line-height: 14.32px;
  padding-top: 27px;
  margin-left: 151px;
`;

export const LetterSenderSpan = styled.span`
  color: #898989;
`;
