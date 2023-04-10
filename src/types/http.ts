export const HTTP_ERROR_CODES = {
  401: 401,
};

export interface BaseResponse<T> {
  message?: any;
  code?: number;
  data: T;
  version: string;
}

export interface FileBlob {
  uri: string;
  name: string;
  type: string;
}
