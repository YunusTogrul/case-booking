import axios from "axios";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    const domain = config.public.ApiHost + '/api/'

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