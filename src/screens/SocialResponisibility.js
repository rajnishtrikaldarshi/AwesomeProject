import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SocialBottomModal from '../components/SocialBottomModal';
import HamburgerMenu from '../components/HamburgerMenu';
import {userData} from '../data/constant';

const SocialResponisibility = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Header
        title={'Social Responsibilities'}
        onMenuPress={toggleModal}
        onBack={() => navigation.goBack()}
      />
      <SocialBottomModal visible={modalVisible} onClose={toggleModal} />
      {modalVisible && (
        <HamburgerMenu
          modalVisible={modalVisible}
          user={userData}
          toggleModal={toggleModal}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SocialResponisibility;
