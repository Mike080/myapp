import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: null,
  token: null,
  id: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.username = action.payload.username
      state.token = action.payload.token
      state.id = action.payload.id
    }
  }
})
