const Axios = require('axios')

// This is to make sure that I can access the error response if there's one
const instance = Axios.create({
    baseURL: '/api/',
    headers: {
        'Content-Type' : 'application/json',
        withCredentials: true
    }
})
instance.interceptors.response.use((response) => {
    return response;
}, function (error) {
    if(error.response) {
        return (error.response)
    }
})

module.exports = instance