import * as axios from "axios";


const instanceProfileAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const profileAPI = {
    getProfile(userId) {
        return (
            instanceProfileAPI.get(`profile/${userId}`)
                .then(response => {return response.data})
        )
    }
};