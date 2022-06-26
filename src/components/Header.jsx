import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#000',
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24
  }
})
