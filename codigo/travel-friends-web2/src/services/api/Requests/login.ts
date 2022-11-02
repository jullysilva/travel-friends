import api from "..";

export const loginUser = async (data: any) => {
  await api
    .post("/auth/login", data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
