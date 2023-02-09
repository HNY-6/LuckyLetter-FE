import * as S from './styles/ReadMyLetter.styled';

// 발도장 이미지 스프라이트
import {
  DogRedStampImg,
  DogWhiteStampImg,
  DogOrangeStampImg,
  DogGreenStampImg,
  DogYellowStampImg,
} from '@/components/button/index.style';

const LetterContent = ({ color }: { color: string }) => {
  return (
    <S.LetterGridBox>
      <S.LetterToParagraph>To.(수신자)에게</S.LetterToParagraph>
      <S.LetterContentParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, iusto
        dignissimos quia, repellat, quam modi reiciendis recusandae blanditiis
        cumque possimus porro veniam voluptate ea consequatur perspiciatis illo
        nesciunt hic! Ipsum?
      </S.LetterContentParagraph>
      <S.LetterFromBox>
        <S.LetterFromParagraph color={color}>
          From.<span>(발신자)</span>
        </S.LetterFromParagraph>
        {color === 'red' && <DogRedStampImg />}
        {color === 'orange' && <DogOrangeStampImg />}
        {color === 'yellow' && <DogYellowStampImg />}
        {color === 'green' && <DogGreenStampImg />}
        {color === 'navy' && <DogWhiteStampImg />}
      </S.LetterFromBox>
    </S.LetterGridBox>
  );
};

export default LetterContent;
