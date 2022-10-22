import React from "react";
import api from "..";

export const getRoadmap = async () => {
  const response = await api.get("/roadmap");
  console.log(response);
};

// export const createRoadmap = async ({ data }) => {
//   await api.post("/");
// };

// export const updateRoadmap = async({ data }) => {
//   const response = await api.post("/")
// };
