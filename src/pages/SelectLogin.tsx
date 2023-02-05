import styled from 'styled-components';
import mainCharacter from '@/assets/common-character.png';
import loginRabbitIcon from '@/assets/icon-rabbit.png';
import loginKaKaoIcon from '@/assets/icon-kakao_logo.png';
import DefaultButton from '@/components/UI/Button';
import DefaultIconStyle from '@/style/DefaultIconStyle';
import { Link, useNavigate } from 'react-router-dom';

const MainCharacter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MainCharacterImg = styled.img`
  height: 344px;
  width: 330px;
  margin-top: 164px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const OrText = styled.span`
  display: block;
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #9e9e9e;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0px;
    width: 120px;
    background-color: #aaa;
    height: 1px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0px;
    width: 120px;
    background-color: #aaa;
    height: 1px;
  }
`;

const FirstEnteredBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
  &:hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const FirstEnteredText = styled.span`
  font-size: 16px;
  color: #444;
  transition: all 0.3s ease;
`;
const FirstEnteredButton = styled.button`
  font-size: 16px;
  color: var(--main-color);
  transition: all 0.3s ease;
  &:hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const kakaoLoginStyle = {
  color: 'var(--sub-text-b)',
  backgroundColor: '#FEE500',
  marginTop: '55px',
};

const defaultLoginStyle = {};

const SelectLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainCharacter>
        <MainCharacterImg src={mainCharacter} />
        <ButtonBox>
          <DefaultButton
            styleOverrides={kakaoLoginStyle}
            label={`카카오로 시작하기`}
            icon={<DefaultIconStyle src={loginKaKaoIcon} />}
          />
          <OrText>또는</OrText>
          <DefaultButton
            styleOverrides={defaultLoginStyle}
            onClick={() => {
              navigate('/auth/login');
            }}
            label={`기존 계정으로 로그인`}
            icon={<DefaultIconStyle src={loginRabbitIcon} />}
          />
        </ButtonBox>

        <FirstEnteredBox>
          <FirstEnteredText>처음 방문하셨나요?</FirstEnteredText>
          <FirstEnteredButton>
            <Link to="/join">회원가입하기</Link>
          </FirstEnteredButton>
        </FirstEnteredBox>
      </MainCharacter>
    </>
  );
};

export default SelectLogin;
