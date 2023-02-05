import ValidationInput from '@/components/UI/Input';
import styled from 'styled-components';
import TitleLogo from '@/assets/Title.png';
import DefaultButton from '@/components/UI/Button';

const MainCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleImg = styled.img`
  height: 59px;
  width: 226px;
  margin-top: 104px;
`;

const joinLoginStyle = {
  marginTop: '60px',
};

const Join = () => {
  return (
    <>
      <MainCharacter>
        <TitleImg src={TitleLogo} />
      </MainCharacter>
      <ValidationInput label={'이름'} />
      <ValidationInput label={'이메일'} />
      <ValidationInput label={'비밀번호'} />
      <ValidationInput label={'비밀번호 확인'} />

      <DefaultButton styleOverrides={joinLoginStyle} label={'회원가입'} />
    </>
  );
};
export default Join;
