import { Link } from 'react-router-dom';
import { LogoutBtn, CopyLinkBtn } from '@/components/button/index.style';
import homeBG from '@/assets/home-bg.png';
import styled from 'styled-components';
import DefaultButton from '@/components/UI/Button';
import DefaultIconStyle from '@/style/DefaultIconStyle';
import homeMoonIcon from '@/assets/icon-moon.png';

// 홈화면 토끼 이미지 부분
const MainBackgroundImg = styled.img`
  width: 330px;
  height: 330px;
`;

const BtnTextBox = styled.div`
  font-size: 15px;
  color: black;
  margin: 20px 0;
  text-align: center;
`;

// 받은 세뱃돈 표시, 링크복사-로그아웃 버튼 영역
const HomeDisplayBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 104px;
  margin-bottom: 33px;
  padding: 0;
`;
const HomeTextBox = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 26.25px;
`;
const BtnBox = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <>
      <HomeDisplayBox>
        <HomeTextBox>
          신현우님!
          <br />
          받은 세뱃돈은
          <br />총 25,000원 입니다!
        </HomeTextBox>
        <BtnBox>
          <CopyLinkBtn as='button' />
          <LogoutBtn as='button' />
        </BtnBox>
      </HomeDisplayBox>
      <MainBackgroundImg src={homeBG} alt='메인 이미지' />
      <DefaultButton
        label='받은 복주머니 보러가기'
        styleOverrides={{
          marginTop: '42px',
        }}
      ></DefaultButton>
      <BtnTextBox>복주머니 보내기를 연습해보세요! 🐰</BtnTextBox>
      <DefaultButton
        label='달토끼에게 복주머니 보내기'
        icon={
          <DefaultIconStyle
            src={homeMoonIcon}
            styleOverrides={{
              left: '45px',
            }}
          />
        }
      />
    </>
  );
};

export default Home;
