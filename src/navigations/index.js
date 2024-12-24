// navigation/index.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CustomStackNavigator from './components/CustomStackNavigator';
import stackRoutes from './config/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CarsProvider} from '../context/CarsProvider';

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <CarsProvider>
        <NavigationContainer>
          <CustomStackNavigator routes={stackRoutes} initialRoute="Carousel" />
        </NavigationContainer>
      </CarsProvider>
    </SafeAreaProvider>
  );
};

export default Navigation;
