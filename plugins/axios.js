import axios from "axios";

export default defineNuxtPlugin(nuxtApp => {
    const domain = 'https://cms-project.onrender.com/api/'

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