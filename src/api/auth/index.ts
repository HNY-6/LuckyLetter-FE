import { api } from '@/api/axios';
import { RegisterValues } from '@/api/auth/type/registerUser.req';

export const registerUser = async (formData: RegisterValues) => {
  try {
    const response = await api.post<string>('/api/users', {
      email: formData.userEmail,
      name: formData.userName,
      password: formData.userPassword,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
