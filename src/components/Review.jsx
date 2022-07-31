import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings'
import Button from './Button'

const Review = () => {
  const [text, setText] = useState('')
  const sendReview = () => {

  }
  return (
    <View>
      <Rating />
      <TextInput value={text} onChangeText={text => setText(text)} />
      <Button onPress={sendReview} />
    </View>
  )
}

export default Review
