import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Navigation from './navigation/Navigation'
import 'react-native-gesture-handler'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App
