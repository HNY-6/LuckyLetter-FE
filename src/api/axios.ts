import axios from 'axios';

export const api = axios.create({
  baseURL:
    'http://ec2-15-165-104-125.ap-northeast-2.compute.amazonaws.com:8080',
});

const config = {
  headers: { 'Content-type': 'application/json' },
};
