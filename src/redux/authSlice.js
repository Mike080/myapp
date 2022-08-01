import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api'

const initialState = {
  username: null,
  token: null,
  isAuth: false
}

export const register = createAsyncThunk('auth/register', async (data) => {
  const res = await axios.post('/api/register/', data)
  console.log(res.data)
})

export const login = createAsyncThunk('auth/login', async (data) => {
  const res = await axios.post('/api/login/', data)
  console.log(res.data)
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

export default authSlice.reducer
