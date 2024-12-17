import axios from "axios";

export const url="http://localhost:7000";
const AxiosAPI=axios.create({
    baseURL:url
});
export default AxiosAPI;