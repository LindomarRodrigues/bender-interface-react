import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Constantes from "../utilitarios/Constantes"


const MontarAxiosAPI = () => {
    const instance = axios.create({baseURL: Constantes.URL_BASE});
    instance.defaults.headers.common['Bypass-Tunnel-Reminder'] = true;
    instance.interceptors.request.use(config => {
        return AsyncStorage.getItem('@enc_jwt').then(r => {
            console.log(r)
            if (r !== null) {
                config.headers.Authorization = r
            }
            return Promise.resolve(config)
        })
    }, function (error) {
        return Promise.reject(error);
    })
    return instance
}
export default MontarAxiosAPI