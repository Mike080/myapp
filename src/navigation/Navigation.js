import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import SignUp from '../screens/SignUp'
import 'react-native-gesture-handler'

const Drawer = createDrawerNavigator()

function Navigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sign Up" component={SignUp} />
    </Drawer.Navigator>
  )
}

export default Navigation
