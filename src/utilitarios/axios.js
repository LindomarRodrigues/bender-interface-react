import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";


const MontarAxiosAPI = () => {
    const instance = axios.create({baseURL: 'https://6dbf-177-126-94-254.ngrok.io'});
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