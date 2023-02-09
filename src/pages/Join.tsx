import ValidationInput from '@/components/UI/Input';
import styled from 'styled-components';
import TitleLogo from '@/assets/common-title.png';
import DefaultButton from '@/components/UI/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

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

interface FormInput {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPasswordConfirm: string;
}

const Join = () => {
  const { register, handleSubmit, watch } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  console.log(watch());

  return (
    <>
      <MainCharacter>
        <TitleImg src={TitleLogo} />
      </MainCharacter>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ValidationInput
          register={register('userName')}
          label={'이름'}
          placeholder={'이름'}
          errorMessage={'에러메시지 테스트'}
          asterisk={true}
        />
        <ValidationInput
          register={register('userEmail')}
          label={'이메일'}
          placeholder={'example@example.com'}
          asterisk={true}
        />
        <ValidationInput
          register={register('userPassword')}
          type={'password'}
          label={'비밀번호'}
          placeholder={'********'}
          asterisk={true}
        />
        <ValidationInput
          register={register('userPasswordConfirm')}
          type={'password'}
          label={'비밀번호 확인'}
          placeholder={'********'}
          asterisk={true}
        />

        <DefaultButton styleOverrides={joinLoginStyle} label={'회원가입'} />
      </form>
    </>
  );
};
export default Join;
