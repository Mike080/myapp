import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'

const Product = ({ product }) => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: `http://smktesting.herokuapp.com/static/${product.img}`
          }}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{product.title}</Text>
        <Text>{product.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Product

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
})