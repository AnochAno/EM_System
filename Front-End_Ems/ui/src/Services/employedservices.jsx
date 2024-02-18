import axios from 'axios';

const REST_API_Common_URL = 'http://localhost:8080/api/employes';

export const listempoyes = () => axios.get(REST_API_Common_URL);

export const createEmploye = (addEmploye) => axios.post(REST_API_Common_URL, addEmploye);

export const updateEmploye = (employeId, employeData) => axios.put(`${REST_API_Common_URL}/${employeId}`, employeData);
