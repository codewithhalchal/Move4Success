import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rowPropsType } from '../../types/type'

const Row:React.FC<rowPropsType> = ({children,style,onPress,...props}) => {
  return (
   <Pressable onPress={onPress}>
    <View style={[style,styles.rowView]}>
   {children}
    </View>
   </Pressable>
  )
}

export default Row

const styles = StyleSheet.create({
    rowView:{
        flexDirection:"row"
    }
})