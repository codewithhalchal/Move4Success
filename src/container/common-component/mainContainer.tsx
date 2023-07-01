import { View, Text,SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { StylesByMain,} from '../../assets/style'
import { mainConatinerType } from '../../types/type'
import { colorVariable } from '../../constants/colorVariable'

const MainContainer:React.FC<mainConatinerType> = ({children,...props}) => {
  return (
    <SafeAreaView style={[StylesByMain().container,styles.mainView]}>
        <View style={StylesByMain().container}>
            {children}
        </View>
    </SafeAreaView>
  )
}

export default MainContainer
const styles=StyleSheet.create({
    mainView:{
        backgroundColor:"rgba(40,84,28,0.5)"
    }
})