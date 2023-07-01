import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rowPropsType } from '../../types/type'

interface imagePropsType{
    onPress?:any;
    source?:any;
    style?:any;

}

const AppImage:React.FC<imagePropsType> = ({source,onPress,style,...props}) => {
  return (
   <Pressable onPress={onPress}>
    <Image source={source} style={style} />
    </Pressable>
  )
}

export default AppImage

const styles = StyleSheet.create({})