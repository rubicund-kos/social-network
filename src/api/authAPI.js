import * as axios from "axios";

const instanceUserAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const authAPI = {
    getAuthData() {
        instanceUserAPI.get(`auth/me`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    return {id, login, email};
                }
            })
    }
}