import {Animated, StatusBar, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Routes from './src/navigations/routes';
import {colorVariables} from './src/constants/colorVariable';
import {heightPercentageToDP} from './src/helper/responsive';
import {imagePathVariables} from './src/constants/imagePathVariable';
import {SnackBar} from './src/utils/snackBar';
import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const opacity = new Animated.Value(1);
  useEffect(() => {
    setTimeout(() => {
      setIsAppReady(true);
    }, 2000);
  }, []);
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <>
      <StatusBar barStyle={'light-content'} />
      {isAppReady && <Routes />}
      {!isAppReady && (
        <View
          style={{
            flex: 1,
            backgroundColor: colorVariables?.primaryGreen,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.Image
            style={{
              opacity: opacity,
              position: 'absolute',
              alignItems: 'center',
              resizeMode: 'contain',
              marginBottom: heightPercentageToDP(2),
            }}
            source={imagePathVariables?.logo2}
          />
        </View>
      )}
      <SnackBar />
    </>
    </PersistGate>
    </Provider>
  );
};

export default App;
