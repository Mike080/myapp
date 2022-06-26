import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'

const {Navigator, Screen} = createDrawerNavigator()

function Navigation() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}

export default Navigation
