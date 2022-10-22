import api from "../api";

const url = "https://travel-friends-backend.herokuapp.com/";

export async function getAllRoadmap() {
  try {
    const response = await api.get(url);

    const data = {
      data: response.data,
      status: response.status,
    };

    console.log(data);
    return data;
  } catch (error) {
    console.log("---> Roteiro error: ");
  }
}
