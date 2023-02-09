import * as S from './styles/ReadMyLetter.styled';

import LetterContent from './LetterContent';

const LetterContainer = ({ color }: { color: string }) => {
  return (
    <S.LetterBox color={color}>
      <LetterContent color={color} />
    </S.LetterBox>
  );
};

export default LetterContainer;
