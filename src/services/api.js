import axios from "axios";

const api = axios.create({
    baseURL: 'https://63c21435b0c286fbe5e94003.mockapi.io/'
});

export default api;