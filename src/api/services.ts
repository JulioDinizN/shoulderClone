import api from './index';

type RequestResponse = {
  data: product[];
  message: string;
  metadata: {
    currentPage: number;
    nextPage: number;
    totalPages: number;
    totalProducts: number;
  };
  status: number;
};

type product = {
  _id: string;
  category: {
    _id: string;
    name: string;
    slug: string;
  };
  createdAt: Date;
  createdBy: {
    _id: string;
    name: string;
    role: string;
  };
  description: string;
  image: string;
  price: number;
  slug: string;
  title: string;
  updatedAt: Date;
};

export const getProducts = async (page: number) => {
  return await api.get<RequestResponse>('/products', {
    params: {
      limit: 10,
      page,
    },
  });
};
