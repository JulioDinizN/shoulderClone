import { RequestResponse } from '../types';
import api from './index';

export const getProductsAPI = async (page: number) => {
  return await api.get<RequestResponse>('/products', {
    params: {
      limit: 10,
      page,
    },
  });
};
