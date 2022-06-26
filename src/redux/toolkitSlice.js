import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../api/index'

const initialState = {
  productList: [],
  status: null
}

export const getProducts = createAsyncThunk('posts/getPosts', async () => {
  const res = await API.get('/api/products')
  return res.data
})

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  extraReducers: {
    [getProducts.pending]: state => {
      state.status = 'loading...'
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      return { ...state, productList: payload }
    },
    [getProducts.rejected]: state => {
      state.status = 'failed'
    }
  }
})

export default toolkitSlice.reducer
