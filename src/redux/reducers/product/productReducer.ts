import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getProductsAPI} from '../../../api/services';
import {InitialStateType, Product} from '../../../types';

const initialState = {
  products: [],
  loading: false,
  isPaginationEnd: false,
  isFirstLoad: false,
} as InitialStateType;

export const fetchProductsByPage = createAsyncThunk(
  'users/fetchByIdStatus',
  async (pageNumber: number, thunkAPI) => {
    const response = await getProductsAPI(pageNumber);
    return response.data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setFirstLoad(state, action: PayloadAction<boolean>) {
      state.isFirstLoad = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsByPage.fulfilled, (state, action) => {
        state.products = (state.products as Product[]).concat(
          action.payload.data,
        );
        state.isPaginationEnd = !action?.payload?.metadata?.nextPage;
        state.loading = false;
      })
      .addCase(fetchProductsByPage.pending, (state, action) => {
        state.loading = true;
        state.isFirstLoad = false;
      })
      .addCase(fetchProductsByPage.rejected, (state, action) => {
        state.loading = false;
        state.isFirstLoad = false;
        console.log('ERROR');
      });
  },
});

export const {setFirstLoad} = productSlice.actions;
export default productSlice.reducer;
