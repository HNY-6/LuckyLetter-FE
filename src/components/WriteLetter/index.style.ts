import { DogYellowStampImg } from './../button/index.style';
import styled from 'styled-components';
import yellorLetter from '@/assets/letter-yellow_bg.png';

export const LetterBox = styled.div`
  width: 330px;
  height: 465px;
  background: url(${yellorLetter});
  margin-bottom: 40px;
  padding: 145px 30px 30px;
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

export const LetterStamp = styled(DogYellowStampImg)`
  float: right;
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
