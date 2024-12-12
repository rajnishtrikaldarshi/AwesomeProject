// navigation/index.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomStackNavigator from './components/CustomStackNavigator';
import stackRoutes from './config/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CustomStackNavigator routes={stackRoutes} initialRoute="Carousel" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
