import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Animated,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import MainContainer from '../../../common-component/mainContainer';
import LinearGradientContainer from '../../../common-component/linearGradientContainer';
import {imagePathVariables} from '../../../../constants/imagePathVariable';
import {StylesByMain} from '../../../../assets/style';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import Row from '../../../common-component/row';
import AppImage from '../../../common-component/appImage';
import {fontFamilyVariables} from '../../../../constants/fontFamilyVariable';
import {
  BoldText,
  MediumText,
  RegularText,
} from '../../../common-component/commonText';
import AppInput from '../../../common-component/appInput';
import {loginDatatypes} from '../../../../types/type';
import {useTranslation, initReactI18next} from 'react-i18next';
import {wp} from '../../../../helper/metrices';
import {loginWithEmail} from '../../../../helper/yupValidation';
import AppButton from '../../../common-component/appButton';
import i18n from 'i18next';
import {showErrorSnackBar, showSuccessSnackBar} from '../../../../utils/common';
import { useNavigation } from '@react-navigation/native';
import { colorVariables } from '../../../../constants/colorVariable';

const SignIn = () => {
  const navigation=useNavigation<any>();
  const formRef = useRef<any>(null);
  const emailRef = useRef<any>();
  const passRef = useRef<any>();
  const {t} = useTranslation();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const initialValues: loginDatatypes = {
    email: '',
    password: '',
  };
  const handleLogin = (values: loginDatatypes) => {
    const {email, password} = values;
    showSuccessSnackBar('dhbjhb');
    // showErrorSnackBar("hjhdbj");
  };
  return (
    <MainContainer>
       <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
        {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}> */}
      <ImageBackground source={imagePathVariables?.manBg} style={{flex: 1}}>
        <Animated.View style={[StylesByMain().container, styles.mainView]}>
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}> */}
            <Row style={styles.logoRow}>
              <BoldText style={StylesByMain().font30White}>Login</BoldText>
            
          
            </Row>
            {/* <ScrollView style={styles.scrollContainer}> */}
              {/* <AppInput label={"Email"} placeholder={'Enter email address'} />
            <AppInput label={"Password"} placeholder={'Password'} /> */}
              <Formik
                initialValues={initialValues}
                innerRef={formRef}
                onSubmit={values => handleLogin(values)}
                validationSchema={loginWithEmail}>
                {props => (
                 
                
                 <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            style={[StylesByMain().middleView,styles?.scrollContainer,]}>
                        <AppInput
                          label={t('email')}
                          placeholder={t('email')}
                          onChangeText={(value: any) => {
                            props.setFieldTouched('email', true);
                            props.setFieldValue('email', value);
                          }}
                          value={props.values.email}
                          error={props.touched.email && props.errors.email}
                          onBlur={() => {
                            props.setFieldTouched('email', true);
                          }}
                          keyboardType={'email-address'}
                          ref={emailRef}
                          onSubmitEditing={() => {
                            passRef.current.focus();
                          }}
                          blurOnSubmit={false}
                          returnKeyType="next"
                          // textContentType={'emailAddress'}
                        />
                    
                          <AppInput
                            // inputContainerStyle={{marginTop: wp(5)}}
                            label={'Password'}
                            placeholder={t('password')}
                            onChangeText={(value: any) => {
                              props.setFieldTouched('password', true);
                              props.setFieldValue('password', value);
                            }}
                            value={props.values.password}
                            error={
                              props.touched.password && props.errors.password
                            }
                            onBlur={() => {
                              props.setFieldTouched('password', true);
                            }}
                            secureTextEntry={!showPass}
                            // rightImageSrc={
                            //   showPass
                            //     ? ImageUrlConstants.openEye
                            //     : ImageUrlConstants.closedEye
                            // }
                            rightImageStyle={{width: wp(4), height: wp(4)}}
                            onRightImagePress={() => {
                              setShowPass(!showPass);
                            }}
                            ref={passRef}
                            onSubmitEditing={() => {
                              props.handleSubmit();
                            }}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            // textContentType={'password'}
                          />
                          {/* <MediumText
                          onPress={()=>{navigation.navigate('ForgotPassword')}}
                            style={[StylesByMain().font14White, styles.forgot]}>
                            Forgot your password?
                          </MediumText> */}
                          <Row style={styles.rememberAndForgotPasswordContainerStyle}>
                      <Row style={styles.rememberDetailContainerStyle}>
                        <Pressable
                          onPress={() => {
                            setRememberMe(!rememberMe);
                          }}>
                          {rememberMe ? (
                            <Image
                              source={imagePathVariables.checkedIcon}
                              style={styles.emptyCheckBoxStyles}
                            />
                          ) : (
                            <View
                              style={[
                                styles.emptyCheckBoxStyles,
                                {borderColor: colorVariables.darkGray},
                              ]}
                            />
                          )}
                        </Pressable>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => {
                            setRememberMe(!rememberMe);
                          }}>
                          <RegularText style={[styles.rememberMeTextStyle,StylesByMain().font14White]}>
                            {t('rememberMe')}
                          </RegularText>
                        </TouchableOpacity>
                      </Row>
                      <MediumText
                          onPress={()=>{navigation.navigate('ForgotPassword')}}
                            style={[StylesByMain().font14White, styles.forgot]}>
                            Forgot your password?
                          </MediumText>
                    </Row>
                       
                
                    
                    <AppButton
                      onPress={() => props.handleSubmit()}
                      title={t('LOGIN')}
                      style={{marginTop: wp(1)}}
                      // borderButton
                      backgroundButton
                    />
                 <MediumText
                          onPress={()=>{navigation.navigate('Register')}}
                            style={[StylesByMain().font16White, styles.register]}>
                            Register now
                          </MediumText>
                   </ScrollView>
     
                )}
              </Formik>
           
          {/* </KeyboardAvoidingView> */}
        </Animated.View>
      </ImageBackground>
      {/* </KeyboardAvoidingView> */}
      </KeyboardAvoidingView>
    </MainContainer>
  );
};

export default SignIn;
