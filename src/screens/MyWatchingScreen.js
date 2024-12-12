import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';

const MyWatchingScreen = ({navigation}) => {
  return (
    <View>
      <Header title="Results" onBack={() => navigation.goBack()} />
    </View>
  );
};

export default MyWatchingScreen;
