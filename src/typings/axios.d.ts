import * as axios from 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _retry?: boolean;
    __isRetryRequest?: boolean;
    retryCount?: number;
  }
}
