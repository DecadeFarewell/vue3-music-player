import http from '@/http/index';
import Axios, { AxiosRequestConfig, AxiosPromise, AxiosInstance, Method } from 'axios';

type Methods = 'get' | 'post';
type Parameter<T extends (arg: any) => any> = T extends (arg: infer P) => any ? P : never;

// FIXME: the type has problem
const createApis = <T extends { [k: string]: any }>(apiList: { [k in keyof T]: string }) => {
  const api: {
    [k in keyof T]: (
      data: Parameter<T[Extract<keyof T, string>]>,
      config?: AxiosRequestConfig,
    ) => AxiosPromise<ReturnType<T[Extract<keyof T, string>]>>;
  } = Object.create(null);

  for (const key in apiList) {
    const value = apiList[key] as string;

    let method: Methods = 'get';
    let requestUrl = value;

    const paramsArray = value.split(' ');
    if (paramsArray.length === 2) {
      method = paramsArray[0].toLocaleLowerCase() as Methods;
      requestUrl = paramsArray[1];
    }

    api[key] = (data: any, config: any) => http[method](requestUrl, data, config);
  }
  return api;
};

export default createApis;
