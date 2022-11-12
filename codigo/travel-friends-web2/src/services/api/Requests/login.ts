import api from "..";
import { User } from "../../../@types/models.interface";

interface AuthProps{
  data: User,
  status: number
};

export const loginUser = async (data: {}) => {
    try {
      const response = await api.post('/auth/login', data);
      const user = {
        data: response.data,
        status: response.status
      };
      return user;
  } catch (error) {
      return error;
  };
};

export const resetPassword = async (data: any) => {
  await api.post('', data).then((res) => {
    return res.data;
  }).catch((error) => {
    return error;
  });
};

export const registerUser = async (data: any) => {
  await api.post('/auth/register', data).then((res) => {
    return res.data;
  }).catch((error) => {
    return error;
  });
};
