import axios from 'axios';

// 这里自己获取token
let token = sessionStorage.getItem('token');


// axios 配置
axios.defaults.timeout = 1 * 60 * 1000;
axios.defaults.baseURL = '/';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (token) {  
      console.log("token:"+token);
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Cookie= `${token}`; // 根据实际情况自行修改
      config.withCredentials=true;
      console.log(config.headers.Cookie);
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
export default axios;
