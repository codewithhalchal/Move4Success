import { StyleSheet, TextStyle } from "react-native";
import { colorVariables } from "../../constants/colorVariable";
import { fontSizeVariables } from "../../constants/fontSizeVariable";
const font14:TextStyle={
    fontSize:fontSizeVariables?.font14,
}
const font16:TextStyle={
    fontSize:fontSizeVariables?.font16,
}
const font24:TextStyle={
    fontSize:fontSizeVariables?.font24,
}
const font30:TextStyle={
    fontSize:fontSizeVariables?.font30,
}

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colorVariables?.white
    },
    middleView:{
        flex: 1, flexGrow: 1
    },
    font14Black:{
        ...font14,
        color:colorVariables?.black
    },
    font14White:{
        ...font14,
        color:colorVariables?.white
    },
    font14Red:{
        ...font14,
        color:colorVariables?.textErrorColor
    },
    font16Black:{
        ...font16,
        color:colorVariables?.black
    },
    font16White:{
        ...font16,
        color:colorVariables?.white
    },
    font16Green:{
        ...font16,
        color:colorVariables?.boldGreen
    },
    font24Black:{
        ...font24,
        color:colorVariables?.black
    },
    font24White:{
        ...font24,
        color:colorVariables?.white
    },
    font24Green:{
        ...font24,
        color:colorVariables?.boldGreen
    },
    font30Black:{
        ...font30,
        color:colorVariables?.black
    },
    font30White:{
        ...font30,
        color:colorVariables?.white
    },

})
export function StylesByMain(){
    return styles
}