import api from "..";

export const getAllRoadmap = async() => {
  try {
    const response = await api.get("/roadmap");

    const data = {
      data: response.data,
      status: response.status,
    };

    return data;
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
