import { axiosBaseURL } from '@/api/axios';
import { RegisterValues } from '@/api/auth/type/registerUser.req';
import { LoginValues } from '@/api/auth/type/loginUser.req';

export const registerUser = async (formData: RegisterValues) => {
  const response = await axiosBaseURL.post<string>('/api/users', {
    email: formData.userEmail,
    name: formData.userName,
    password: formData.userPassword,
  });
  console.log(response);
  return response;
};

export const LoginUser = async (formData: LoginValues) => {
  const response = await axiosBaseURL.post('/api/users/login', {
    email: formData.userEmail,
    password: formData.userPassword,
  });
};
