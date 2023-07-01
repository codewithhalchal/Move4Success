import React from 'react';
import {
  TextInput,
  TextStyle,
  StyleSheet,
  Pressable,
  Image,
  View,
  I18nManager,
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  ImageStyle,
  ReturnKeyType,
  TextInputProps
} from 'react-native';
import { colorVariables } from '../../constants/colorVariable';
import { hpx, wp } from '../../helper/metrices';
import { fontSizeVariables } from '../../constants/fontSizeVariable';
import { fontFamilyVariables } from '../../constants/fontFamilyVariable';
import { ErrorText, MediumText } from './commonText';
import { StylesByMain } from '../../assets/style';


interface Props {
  error?: any;
  value?: any;
  placeholder?: any;
  loading?: boolean;
  inputContainerStyle?: ViewStyle;
  placeholderTextColor?: any;
  containerStyle?: object;
  titleStyle?: object;
  secureTextEntry?: boolean;
  children?: any;
  onInputRef?: any;
  inputStyle?: StyleProp<TextStyle>;
  editable?: boolean;
  onPress?: any;
  iconName?: any;
  rightSideContent?: any;
  iconStyle?: object;
  leftIconStyle?: object;
  leftIconName?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  multiline?: boolean;
  rightImageSrc?: any;
  rightImageStyle?: ImageStyle;
  rightImageContStyle?: ViewStyle;
  onRightImagePress?: () => void;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyType;
  textContentType?: Pick<TextInputProps, 'textContentType'>;
  label?:any;
}

const AppInput = React.forwardRef((props: Props, ref: any) => {
  const {
    value,
    inputContainerStyle,
    inputStyle,
    error,
    placeholderTextColor,
    secureTextEntry,
    placeholder,
    editable,
    keyboardType,
    onChangeText,
    onBlur,
    multiline,
    rightImageSrc,
    rightImageStyle,
    rightImageContStyle,
    onRightImagePress,
    onSubmitEditing,
    blurOnSubmit,
    returnKeyType,
    textContentType,
    label
  } = props;
  return (
    <>
    <View style={styles?.mainContainer}></View>
    {
      label &&(   <MediumText style={[StylesByMain().font16White,styles.label]}>{label}</MediumText>)
    }
 
      <View style={[styles?.inputContainerStyle, inputContainerStyle,
        {borderColor:error?colorVariables?.errorBorderColor:colorVariables?.lightBlack}
        ]}>
        <TextInput
          ref={ref}
          multiline={multiline}
          style={[styles?.inputStyle, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor || colorVariables?.placeholderColor
          }
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          editable={editable}
          onBlur={onBlur}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          //@ts-ignore
          textContentType={textContentType}
        />
        {
          rightImageSrc &&
          <TouchableOpacity activeOpacity={0.7}
            style={[{ paddingHorizontal: wp(2), alignSelf: 'stretch', justifyContent: 'center' }, rightImageContStyle]}
            onPress={onRightImagePress}
          >
            <Image source={rightImageSrc} style={rightImageStyle} />
          </TouchableOpacity>
        }
      </View>
      {!!error && (
        <ErrorText
          style={{
            marginTop: wp(0.5),
          }}>
          {error}
        </ErrorText>
      )}
    </>
  );
});

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:hpx(24),
    },
    label:{
        paddingBottom:hpx(10)
    },
  inputContainerStyle: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // borderColor: colorVariable?.black,
    borderWidth: 1,
    borderRadius: 50,
   
    backgroundColor: colorVariables?.lightBlack
  },

  inputStyle: {
    height: 48,
    paddingHorizontal: wp(4),
    fontSize: fontSizeVariables.font14,
    fontFamily: fontFamilyVariables?.senRegular,
    flex: 1,
    color:colorVariables?.white
  },

});

export default AppInput;
