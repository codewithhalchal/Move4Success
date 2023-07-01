import { Text, TextProps } from "react-native"
import { StylesByMain, styles } from "../../assets/style"
import { fontFamilyVariables } from "../../constants/fontFamilyVariable"

export const RegularText=(props:TextProps)=>{
    return(
        <Text {...props} style={[props.style,{fontFamily:fontFamilyVariables?.senRegular}]} >
            {props.children}
        </Text>
    )
}
export const MediumText=(props:TextProps)=>{
    return(
        <Text {...props} style={[props.style,{fontFamily:fontFamilyVariables?.sairaMedium}]} >
            {props.children}
        </Text>
    )
}
export const BoldText=(props:TextProps)=>{
    return(
        <Text {...props} style={[props.style,{fontFamily:fontFamilyVariables?.senBold}]} >
            {props.children}
        </Text>
    )
}
export const SemiBoldText=(props:TextProps)=>{
    return(
        <Text {...props} style={[props.style,{fontFamily:fontFamilyVariables?.sairaSemiBold}]} >
            {props.children}
        </Text>
    )
}
export const ExtraBoldText=(props:TextProps)=>{
    return(
        <Text {...props} style={[props.style,{fontFamily:fontFamilyVariables?.senExtraBold}]} >
            {props.children}
        </Text>
    )
}

export const ErrorText=(props:TextProps)=>{
    return(
        <Text {...props} style={[props.style,StylesByMain()?.font14Red,{fontFamily:fontFamilyVariables?.senRegular}]} >
            {props.children}
        </Text>
    )
}