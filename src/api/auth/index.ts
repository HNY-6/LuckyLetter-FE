import { api } from '@/api/axios';
import { RegisterValues } from '@/api/auth/type/registerUser.req';

export const registerUser = async (formData: RegisterValues) => {
  try {
    const { data } = await api.post<string>('/api/users', formData);
    console.log(data);
    return { data };
  } catch (error) {
    console.log(error);
  }
};
