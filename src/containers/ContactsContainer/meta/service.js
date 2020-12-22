import axios from 'axios';
import {BASE_URL} from "../../../utils/environmnet";

export default {
    getContacts(body) {
        const {response} = new axios.get(BASE_URL,body);
        return response;
    },
};
