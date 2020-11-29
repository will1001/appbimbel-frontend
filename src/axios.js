import axios from "axios"

const instance = axios.create({
    baseURL: "https://www.wilirahmatm.xyz"
});

export default instance