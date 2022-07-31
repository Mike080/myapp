import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import authReducer from './authSlice'

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer
})

export const store = configureStore({
  reducer: rootReducer
})
