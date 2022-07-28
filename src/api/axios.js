import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '4ffb84f1beb9db1a53b95c9b83caced1',
    language: 'ko-KR',
  },
});

export default instance;
