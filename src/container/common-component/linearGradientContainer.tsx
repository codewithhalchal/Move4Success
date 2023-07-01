import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StylesByMain } from '../../assets/style';
import { linearGradientPropsType } from '../../types/type';
import { colorVariable } from '../../constants/colorVariable';

const LinearGradientContainer:React.FC<linearGradientPropsType> = ({start,end,children,style,colors,...props}) => {
  return (
  <LinearGradient start={start||{x: 0, y: 1}} end={end||{x: 1, y: 0}} colors={colors||[colorVariable.lightBlack, colorVariable?.darkGreen, colorVariable?.lightBlack]} style={[style||StylesByMain().container]}>
    {children}
  </LinearGradient>
  )
}

export default LinearGradientContainer

const styles = StyleSheet.create({})