import { StyleSheet, FlatList, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/toolkitSlice'
import Product from './Product'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.toolkit.productList)
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <View>
      <FlatList data={products} keyExtractor={item => item.id} renderItem={({ item }) => <Product product={item} />} />
    </View>
  )
}

export default Products
