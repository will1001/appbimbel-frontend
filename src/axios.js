import axios from "axios"

const instance = axios.create({
    baseURL: "https://app-bimbel-web.herokuapp.com"
});

export default instance