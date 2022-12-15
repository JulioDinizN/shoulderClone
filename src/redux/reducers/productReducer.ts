import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "product",
  initialState: {
    message: "Initial message",
    value: 0
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
})

export const { setMessage } = productSlice.actions
export default productSlice.reducer