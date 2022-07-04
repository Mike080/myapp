import React from 'react'
import { View, StyleSheet } from 'react-native'
import Products from '../components/Products'
import { Provider } from 'react-redux'
import { store } from '../redux/index'

const Home = () => {
  return (
    <Provider store={store}>
      <View styles={styles.container}>
        <Products />
      </View>
    </Provider>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
})
