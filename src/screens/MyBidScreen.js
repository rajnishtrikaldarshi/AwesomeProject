// screens/MyBidScreen.js
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {userData} from '../data/constant';
import FilterComponent from '../components/FilterComponent';
import {useCars} from '../context/CarsProvider';

const MyBidScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };
  const {cars} = useCars();

  let data = cars.filter(item => {
    return item.placeBid === true;
  });
  return (
    <View style={styles.container}>
      <Header
        title="Cars"
        onBack={() => navigation.goBack()}
        onMenuPress={toggleModal}
      />
      <View style={{marginBottom: 16}} />
      <FilterComponent
        data={data}
        navigation={navigation}
        headerFilter={true}
      />
      {modalVisible ? (
        <HamburgerMenu
          modalVisible={modalVisible}
          user={userData}
          toggleModal={toggleModal}
          navigation={navigation}
        />
      ) : null}
    </View>
  );
};

export default MyBidScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
