import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FormButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
  }
})