import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api'

const initialState = {
  username: null,
  token: null,
  isAuth: false
}

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue, dispatch }) => {
  const res = await axios.post('/api/register/', data)
  dispatch(setSignIn(res.data))
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.token = action.payload.token
      state.isAuth = true
      state.username = action.payload.username
    },
    setSignOut: state => {
      state.token = null
      state.username = null
      state.isAuth = false
    }
  }
})

export const { setSignIn } = authSlice.actions
export default authSlice.reducer
