import axios from "axios"

const instance = axios.create({
    baseURL: "http://103.161.184.70"
});

export default instance