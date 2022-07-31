import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Review from './Review'

const Product = ({ product }) => {
  const isAuth = useSelector(state => state.auth.isAuth)
  return (
    <TouchableOpacity>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: `http://smktesting.herokuapp.com/static/${product.img}/`
          }}
          resizeMode="contain"
        />
      </View>

      <View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{product.title}</Text>
        <Text>{product.text}</Text>
        {isAuth && <Review />}
      </View>
    </TouchableOpacity>
  )
}

export default Product

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  input: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#ccc'
  }
})
