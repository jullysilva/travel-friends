import api from "..";

export const getRoadmap = async () => {
  try {
    const response = await api.get("/roadmap");
    return response;
  } catch (error) {
    console.log("erro na requisicao");
  }
};

export const createRoadmap = async (data: any) => {
  await api.post("/", data);
};

export const updateRoadmap = async (data: any) => {
  const response = await api.post("/");
};
