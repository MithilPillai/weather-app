import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" }); 

export const getWeather = async (city) => {
    try {
        const response = await API.get(`/weather?city=${city}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};