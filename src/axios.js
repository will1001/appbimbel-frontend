import axios from "axios"

const instance = axios.create({
    baseURL: "http://app-bimbel-web.herokuapp.com"
});

export default instance