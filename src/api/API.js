import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "ce8e2bf7-d2cc-4609-b9e3-19efb9b388d7"
        }
});

export const API = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                        return response.data
                    }
                )
        )
    },
    unfollow(userID) {
        return (
            instance.delete(`follow/${userID}`).then(response => {
                return response.data
            })
        )
    },
    follow(userID) {
        return (
            instance.post(`follow/${userID}`, null).then(response => {
                return response.data
            })
        )
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return (
            profileAPI.getProfile(userId)
        )
    }
};

export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => {return response.data})
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => {return response.data})
        )
    },
    updateStatus(status) {
        return (
            instance.put(`profile/status`, {status: status})
        )
    }
};
export const profileAPI = {
    getProfile(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => {return response.data})
        )
    }
};

export const austAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}




