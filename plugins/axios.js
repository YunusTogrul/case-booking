import axios from "axios";

export default defineNuxtPlugin(nuxtApp => {
    const domain = 'http://localhost:1337/api/'

    let api = axios.create({
        baseURL: domain,
        headers: {
            common: {
            }
        }
    })
    return {
        provide: {
            api: api
        }
    }
})