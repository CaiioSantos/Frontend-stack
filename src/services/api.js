import axios from "axios";

const api =  axios.create({
    baseURL: 'https://backend--stack.herokuapp.com'
});

export default api;