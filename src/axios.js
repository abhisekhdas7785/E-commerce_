import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-d4a33.cloudfunctions.net/api'
    //'http://localhost:5001/clone-d4a33/us-central1/api' // API URL
});

export default instance;