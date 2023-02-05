import styled from 'styled-components';

// 발도장 이미지 스프라이트
import {
  DogRedStampImg,
  DogWhiteStampImg,
  DogOrangeStampImg,
  DogGreenStampImg,
  DogYellowStampImg,
} from '@/components/button/index.style';

const LetterGridBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  height: 100%;
`;

const LetterToParagraph = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
`;

const LetterContentParagraph = styled.p`
  line-height: 1.5;
  overflow: scroll;
  font-size: 16px;
  -webkit-line-clamp: 9;
`;

const LetterFromParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  justify-self: flex-end;
  align-self: flex-end;
  font-size: 12px;
  font-weight: bold;

  & span {
    font-size: 14px;
  }
`;

const LetterContent = ({ color }: { color: string }) => {
  return (
    <LetterGridBox>
      <LetterToParagraph>To.(수신자)에게</LetterToParagraph>
      <LetterContentParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iusto
        dignissimos quia, repellat, quam modi reiciendis recusandae blanditiis
        cumque possimus porro veniam voluptate ea consequatur perspiciatis illo
        nesciunt hic! Ipsum?
      </LetterContentParagraph>
      <LetterFromParagraph color={color}>
        From.<span>(발신자)</span>
        {color === 'red' && <DogRedStampImg />}
        {color === 'orange' && <DogOrangeStampImg />}
        {color === 'yellow' && <DogYellowStampImg />}
        {color === 'green' && <DogGreenStampImg />}
        {color === 'navy' && <DogWhiteStampImg />}
      </LetterFromParagraph>
    </LetterGridBox>
  );
};

export default LetterContent;
