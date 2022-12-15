import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "product",
  initialState: {
    message: "Initial message"
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
    }
  }
})

export const { setMessage } = productSlice.actions
export default productSlice.reducer