import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'http://smktesting.herokuapp.com'
})

api.defaults.headers.common['Authorization'] = AsyncStorage.getItem('token')

export default api
