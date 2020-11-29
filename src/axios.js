import axios from "axios"

const instance = axios.create({
    baseURL: "http://www.wilirahmatm.xyz"
});

export default instance