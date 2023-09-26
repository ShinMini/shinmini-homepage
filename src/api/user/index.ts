import API from 'api';

type LoginData = {
  email: string;
  password: string;
};

export const login = async (data: LoginData) => {
  const result = await API.post('user/login', data, { timeout: 1500 });
  return result;
};
