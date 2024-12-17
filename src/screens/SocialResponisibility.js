import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import MyComponent from '../components/SocialCardWithImage';

const SocialResponisibility = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Social Responsibilities'}
        onMenuPress={toggleModal}
        onBack={() => navigation.goBack()}
      />
      <MyComponent />
    </View>
  );
};

export default SocialResponisibility;
