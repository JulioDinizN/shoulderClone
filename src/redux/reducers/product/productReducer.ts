import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

type Product = {
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

type MyType = {
  products: [] | Product[];
  loading: boolean;
};

const myObject: MyType = {
  products: [],
  loading: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState: myObject,
  reducers: {
    getProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});


// export const fetchUsers = createAsyncThunk('users/fetchAll', async () => {
//   const response = await userAPI.fetchAll()
//   // Normalize the data before passing it to our reducer
//   const normalized = normalize(response.data, [userEntity])
//   return normalized.entities
// })


export const {getProducts} = productSlice.actions;
export default productSlice.reducer;
