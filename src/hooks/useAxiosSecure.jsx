import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;