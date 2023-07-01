import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../container/screen/auth/signIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="SignIn" component={SignIn} />
    </AppStack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigator