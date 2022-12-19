export type RequestResponse = {
  data: Product[];
  message: string;
  metadata: {
    currentPage: number;
    nextPage: number;
    totalPages: number;
    totalProducts: number;
  };
  status: number;
};

export type Product = {
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

export type InitialStateType = {
  products: [] | Product[];
  loading: boolean;
  isPaginationEnd: boolean;
  isFirstLoad: boolean;
};
