import { View, Text } from 'react-native'
import React, { useState } from 'react'
import AppNavigator from './appNavigator';
import AuthNavigator from './authNavigator';

const Routes = () => {
    const [token,setToken]=useState(false);
  return (
    token?<AppNavigator/>:<AuthNavigator/>
  )
}

export default Routes