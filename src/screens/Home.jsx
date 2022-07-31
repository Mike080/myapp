import React from 'react'
import { View, StyleSheet } from 'react-native'
import Products from '../components/Products'


const Home = () => {
  return (
    <View styles={styles.container}>
      <Products />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
})
