import * as S from './styles/ReadMyLetter.styled';
import DefaultButton from '../UI/Button';

const LetterButton = () => {
  return (
    <S.LetterButtonBox>
      <DefaultButton
        label="삭제"
        styleOverrides={{
          width: 155,
          padding: '16px 63px',
          backgroundColor: 'var(--warning-color);',
        }}
      />
      <DefaultButton
        label="확인"
        styleOverrides={{ width: 155, padding: '16px 63px' }}
      />
    </S.LetterButtonBox>
  );
};

export default LetterButton;
