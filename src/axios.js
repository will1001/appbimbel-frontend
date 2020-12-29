import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost/app_bimbel_api/"
});

export default instance