import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../container/screen/auth/signIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from '../container/screen/auth/forgotPassword';
import Register from '../container/screen/auth/register';

const AuthStack = createNativeStackNavigator();
const authNavigator = () => {
  return (
    <NavigationContainer>
    <AuthStack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  </NavigationContainer>
  )
}

export default authNavigator