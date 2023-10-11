import API from 'api';
import { z } from 'zod';
import { loginSchema, registerSchema } from './validator/type-schema';

export const login = async (data: z.infer<typeof loginSchema>) => {
  const result = await API.post('user/login', data, { timeout: 1500 });
  return result;
};

export const signIn = async (data: z.infer<typeof registerSchema>) => {
  const result = await API.post('user/register', data, { timeout: 1500 });
  return result;
};
