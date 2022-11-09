import api from "..";

export const loginUser = async (data: any) => {
  await api
    .post("/auth/login", data)
    .then((res) => {
      const response = {
        data: res.data,
        status: res.status
      }; 

      return response;
    });
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
