import { FlatList, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/productSlice'
import Product from './Product'
import Card from './Card'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product.products)
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card>
            <Product product={item} />
          </Card>
        )}
      />
    </View>
  )
}

export default Products


