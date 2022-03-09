/* eslint-disable arrow-body-style */
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig, AxiosPromise } from 'axios';
import { message as AMessage } from 'ant-design-vue';

interface Dictionary<T = any> {
  [x: string]: T;
}

interface Request {
  <T = any>(url: string, param?: Dictionary, custom?: AxiosRequestConfig): AxiosPromise<T>;
}

const errorMessage = (message: string) => {
  AMessage.error({ type: 'error', message, duration: 2000 });
};

const successResponse = (res: AxiosResponse) => {
  const { code, errmsg } = res.data;

  if (code !== 200 && errmsg) errorMessage(errmsg);

  return res;
};

const errorResponse = (err: AxiosError) => {
  let errMag = '连接到服务器失败';
  if (err && err.response) {
    const { status } = err.response;
    switch (status) {
      case 400:
        errMag = '错误请求';
        break;
      case 401:
        errMag = '权限不足/令牌过期';
        break;
      default:
        errMag = `连接错误${status}`;
    }
  }
  errorMessage(errMag);
  return Promise.reject(err);
};

// 最大等待时间
axios.defaults.timeout = 20000;

// 请求拦截器
axios.interceptors.request.use(
  (res) => {
    const config = res;
    const { headers } = config;

    config.headers = headers;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器即异常处理
axios.interceptors.response.use(successResponse, errorResponse);

const get: Request = (url, param = {}, custom = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: param, ...custom })
      .then((res: AxiosResponse) => {
        if (res.data.code === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

const post: Request = (url, param = {}, custom = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, param, custom)
      .then((res: AxiosResponse) => {
        if (res.data.errcode === 200) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};

export default {
  /** get请求 */
  get,
  /** post请求 */
  post,
  /** axios请求 */
  axios<T = any>(custom: AxiosRequestConfig = {}): AxiosPromise<T> {
    return axios(custom);
  },
};
