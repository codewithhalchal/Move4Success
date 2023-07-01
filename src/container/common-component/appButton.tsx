import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colorVariables } from '../../constants/colorVariable';
import { StylesByMain } from '../../assets/style';

interface propsType{
    title?:string;
    onPress?:()=>void;
    style?:any;
    titleStyle?:any;
    borderButton?:boolean;
    backgroundButton?:boolean;
}

const AppButton:React.FC<propsType> = ({title,onPress,style,titleStyle,borderButton,backgroundButton,...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style,styles.buttonView,{backgroundColor:backgroundButton?colorVariables?.primaryGreen:null,borderColor:borderButton?"rgba(184, 255, 174, 1)":null,borderWidth:borderButton?1:0}]} >
      <Text style={[titleStyle,styles.titleStyle,StylesByMain().font24White,]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
    buttonView:{
        paddingHorizontal:12,
        paddingVertical:12,
       
        alignItems:"center",
        justifyContent:"center",
        
        borderWidth:1,
        borderRadius:10,
    },
    titleStyle:{

    }
})