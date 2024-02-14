import axios from 'axios'

const REST_API_Common_URL = 'http://localhost:8080/api/employes'

export const listempoyes = () => {
    return axios.get(REST_API_Common_URL);
}