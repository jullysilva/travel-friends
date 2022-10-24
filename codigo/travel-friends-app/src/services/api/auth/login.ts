import api from "../api";

export const createUser = async (data: {}) => {

    try {
        const response = await api.get("/user");

        const data = {
            data: response.data,
            status: response.status,
        };
        return data;
    } catch (error) {
        console.log("---> User error: ");
    }
};

export const authUser = async (data: {}) => {
    try {
        const response = await api.post('/auth/login', data);

        return response.data;
    } catch (error) {
        return error;
    }
};