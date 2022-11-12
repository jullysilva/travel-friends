import api from "..";
import { UserLogin, UserRegister, AuthUser } from "../../../@types/models.interface";

export const loginUser = async (data: UserLogin) => {
    try {
      const response = await api.post<AuthUser>('/auth/login', data);
      return response;
  } catch (error) {
      return error.response;
  };
};

export const resetPassword = async (data: any) => {
  await api.post('', data).then((res) => {
    return res.data;
  }).catch((error) => {
    return error;
  });
};

export const registerUser = async (data: UserRegister) => {
  try {
    const response = await api.post<AuthUser>('/auth/register', data);
    return response;
  } catch (error) {
      return error.response;
  };
};
