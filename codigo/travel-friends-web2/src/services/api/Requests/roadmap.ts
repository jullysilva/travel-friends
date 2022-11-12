import api from "..";

export const getAllRoadmap = async() => {
  try {
    const response = await api.get("/roadmap");

    return response.data;
  } catch (error) {
    console.log("---> Roteiro error: ");
  }
};

export const createRoadmap = async (data: any) => {
  await api.post("/", data);
};

export const updateRoadmap = async (data: any) => {
  const response = await api.post("/");
};

