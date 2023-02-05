import ValidationInput from '@/components/UI/Input';
import styled from 'styled-components';
import TitleLogo from '@/assets/common-title.png';
import DefaultButton from '@/components/UI/Button';
import { ValidationErrorTextStyle } from '@/components/UI/InputStyle';

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

const loginErrorMessageStyle = {
  margin: '20px 0px',
};

const Login = () => {
  return (
    <>
      <MainCharacter>
        <TitleImg src={TitleLogo} />
      </MainCharacter>
      <ValidationInput
        label={'이메일'}
        placeholder={'example@example.com'}
        asterisk={false}
      />
      <ValidationInput
        label={'비밀번호'}
        placeholder={'********'}
        asterisk={false}
      />
      <ValidationErrorTextStyle styleOverrides={loginErrorMessageStyle}>
        {
          '이메일 또는 비밀번호를 잘못 입력하셨습니다. 입력하신 내용을 다시 확인해 주세요.'
        }
      </ValidationErrorTextStyle>

      <DefaultButton label={'로그인'} />
    </>
  );
};
export default Login;
