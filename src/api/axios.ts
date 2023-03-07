import axios from 'axios';

export const axiosBaseURL = axios.create({
  baseURL:
    'http://ec2-15-165-104-125.ap-northeast-2.compute.amazonaws.com:8080',
});
