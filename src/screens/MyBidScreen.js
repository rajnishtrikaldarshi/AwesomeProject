import React from 'react';
import {Text, View} from 'react-native';
import Header from '../components/Header';

const MyBidScreen = ({navigation}) => {
  return (
    <View>
      <Header title="Cars" onBack={() => navigation.goBack()} />
    </View>
  );
};

export default MyBidScreen;
