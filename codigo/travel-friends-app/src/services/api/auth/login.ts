import { UserRegister } from "../../../screens/auth/SignUp";
import api from "../api";

type AuthProps = {
  data: User;
  status: number;
};

export const createUser = async (user: UserRegister) => {
  try {
    const response = await api.post("/auth/register", user);

    //console.log("resp na api ----> ", response);

    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  } catch (error) {
    console.log("--->Cadastro User error: ");
  }
};

export const authUser = async (user: {}) => {
  try {
    const response = await api.post<AuthProps>("/auth/login", user);
    console.log(user);
    const data = {
      data: response.data,
      status: response.status,
    };
    return data;
  } catch (error) {
    return error;
  }
};
