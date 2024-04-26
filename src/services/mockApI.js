import axios from "axios";
import configuration from "configuration/configuration";

const mockapiKey = configuration.apiMockapiKey;

axios.defaults.baseURL = `https://${mockapiKey}.mockapi.io`;

export const getAllAdvartsAPI = async () => {
    try {
        const response = await axios.get('/adverts');
        return response.data;
    } catch (error) {
        console.error('Error fetching adverts:', error);
        throw error; 
    }
};



