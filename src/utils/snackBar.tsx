
import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import SnackBarManager from './snackBarManager';
import { fontFamilyVariables } from '../constants/fontFamilyVariable';
import { colorVariables } from '../constants/colorVariable';


 export const SnackBar = () => {
    return (
      <DropdownAlert
        ref={(ref) => SnackBarManager.setSnackBar(ref)}
        useNativeDriver={true}
        titleStyle={{
          fontFamily: fontFamilyVariables.senBold,
          color: colorVariables.white,
        }}
        messageStyle={{
          fontFamily: fontFamilyVariables.senRegular,
          color: colorVariables.white,
        }}
        successColor={colorVariables.primaryGreen}
        inactiveStatusBarStyle={'dark-content'}
        inactiveStatusBarBackgroundColor={colorVariables.primaryGreen}
      />
    );
  };
