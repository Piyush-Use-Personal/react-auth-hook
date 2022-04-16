import axios from "axios";

class ServerAuth {
    constructor() {
        const baseURL = 'https://reqres.in/'
        this.axios = axios.create({
            baseURL,
            timeout: 10000,
        })
    }

    getToken(email, password){
        return this.axios.post('/api/login', {
            email, password
        })
    }
}

export default ServerAuth