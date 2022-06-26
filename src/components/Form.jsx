import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import FormButton from './FormButton'

const Form = () => {
  const [value, setValue] = useState('')
  const handleChange = (newText) => {
    setValue(newText)
  }
  console.log(value);
  return (
    <View style={styles.container}>
      <TextInput defaultValue={value} onChange={handleChange} style={styles.input} placeholder="Enter your username" />
      <FormButton title="Register" />
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#ccc'
  },
  container: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40
  }
})