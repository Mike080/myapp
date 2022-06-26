import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './components/Header'
// import Products from './components/Products'
import { Provider } from 'react-redux'
import { store } from './redux'
import Form from './components/Form'

const Home = () => {
  return (
    <Provider store={store}>
      <View styles={styles.container}>
        <Header title="Home" />
        {/* <Products /> */}
        <Form />
      </View>
    </Provider>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
  }
})
