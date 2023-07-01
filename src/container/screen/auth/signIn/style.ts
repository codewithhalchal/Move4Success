import {StyleSheet} from 'react-native';
import {hp, hpx, nf, wp, wpx} from '../../../../helper/metrices';
import { colorVariables } from '../../../../constants/colorVariable';

export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgba(43,83,45,0.6)',
  },
  logoRow: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: hp(30),
    width: wp(90),
    alignSelf: 'center',
  },
  scrollContainer: {
    paddingHorizontal: wp(5),
  },
  forgot: {
    paddingVertical: hpx(10),
    textAlign:"center"
  },
  rememberAndForgotPasswordContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wp(5),
  },
  rememberDetailContainerStyle: {
    alignItems: 'center',
  },
  emptyCheckBoxStyles: {
    height: hpx(16),
    width: hpx(16),
    borderRadius: hp(0.5),
    backgroundColor: colorVariables.darkGray,
  },
  rememberMeTextStyle: {
    marginLeft: wpx(9),
    fontSize: nf(14),
  },
  register:{
    paddingTop:hpx(10),
    paddingBottom:hpx(50),
    textAlign:"center"
  }
});
