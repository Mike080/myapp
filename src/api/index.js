import axios from 'axios'

const api = axios.create({
  baseURL: 'http://smktesting.herokuapp.com'
})

export default api
