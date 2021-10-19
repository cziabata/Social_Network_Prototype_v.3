import * as axios from "axios";

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "6847b8b0-6480-41e7-80b9-70115535fc82"
    }
});

export let authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false){
        return instance.post(`/auth/login`, {email, password, rememberMe});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}
export let profileAPI = {
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    updatePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    getMyProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    saveProfileData(profile) {
        return instance.put(`profile`, profile)
    }
}
export let usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`/users?count=${pageSize}&page=${currentPage}`).then( response => { return response.data });
    },
    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    },
    getUserProfile(userId) {
        return instance.get(`/profile/${userId}`)
    }
}


