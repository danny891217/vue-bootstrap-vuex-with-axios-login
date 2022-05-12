import axios from 'axios'


// axios.interceptors.request.use((config) => {
//     // trigger 'loading=true' event here
//     console.log('before request')
//     return config;
// }, (error) => {
//     // trigger 'loading=false' event here
//     return Promise.reject(error);
// });
//
// axios.interceptors.response.use((response) => {
//     // trigger 'loading=false' event here
//     console.log('after response')
//     return response;
// }, (error) => {
//     // trigger 'loading=false' event here
//     return Promise.reject(error);
// });

export const axios_instance = axios