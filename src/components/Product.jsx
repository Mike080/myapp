import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'

const Product = ({ product }) => {
  return (
    <TouchableOpacity style={{ width: '100%', marginBottom: 25, height: 200, borderRadius: 15 }}>
      <View style={{ height: '70%', width: '100%' }}>
        <Image
          style={styles.image}
          source={{
            uri: `http://smktesting.herokuapp.com/static/${product.img}`
          }}
          resizeMode="contain"
        />
      </View>

      <View style={{ height: '30%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text>{product.title}</Text>
        <Text>{product.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Product

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
})