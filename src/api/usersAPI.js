import * as axios from "axios";

const instanceUserAPI = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "ce8e2bf7-d2cc-4609-b9e3-19efb9b388d7"
        }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            instanceUserAPI.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                        return response.data
                    }
                )
        )
    },
    unfollow(userID) {
        return (
            instanceUserAPI.delete(`follow/${userID}`).then(response => {
                return response.data
            })
        )
    },
    follow(userID) {
        return (
            instanceUserAPI.post(`follow/${userID}`, null).then(response => {
                return response.data
            })
        )
    },
    getProfile(userId) {
        return (
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then(response => {return response.data})
        )
    }
};

export const usersDelete = (userID) => axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`,
    {
        withCredentials: true,
        headers: {
            "API-KEY": "ce8e2bf7-d2cc-4609-b9e3-19efb9b388d7"
        }
    });



