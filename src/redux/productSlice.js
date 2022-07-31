import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api'

const initialState = {
  products: []
}

export const getProducts = createAsyncThunk('products/getProducts', async (_, { rejectWithValue, dispatch }) => {
  const response = await axios.get('/api/products/')
  dispatch(setProducts(response.data))
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }
  },
  extraReducers: {
    [getProducts.pending]: () => console.log('pending'),
    [getProducts.fulfilled]: () => console.log('fulfilled'),
    [getProducts.rejected]: () => console.log('rejected')
  }
})

export const { setProducts } = productSlice.actions
export default productSlice.reducer
