import api from "../api";

export async function getAllUsers() {
  try {
    const response = await api.get("/user");

    const data = {
      data: response.data,
      status: response.status,
    };

    console.log(data);
    return data;
  } catch (error) {
    console.log("---> User error: ");
  }
}
