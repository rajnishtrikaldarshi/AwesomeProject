// screens/HomeScreen.js
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {carsData} from '../data/car';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import Icon from 'react-native-vector-icons/Ionicons';
import FilterMenu from '../components/FilterMenu';
import {userData} from '../data/constant';
import FilterComponent from '../components/FilterComponent';

const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };

  const [filterVisible, setFilterVisible] = useState(false);
  const toggleFilter = () => {
    setFilterVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Cars"
        onMenuPress={toggleModal}
        toggleFilter={toggleFilter}
        showFilter={true}
        showSearch={true}
      />
      <FilterComponent data={carsData} navigation={navigation} />
      {modalVisible ? (
        <HamburgerMenu
          modalVisible={modalVisible}
          user={userData}
          toggleModal={toggleModal}
          navigation={navigation}
        />
      ) : null}

      {filterVisible ? (
        <FilterMenu
          modalVisible={filterVisible}
          user={userData}
          toggleModal={toggleFilter}
          navigation={navigation}
          data={carsData}
        />
      ) : null}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyBids')}
          style={styles.bidContainer}>
          <Icon name="hammer" size={28} color="#000" />
          <Text
            style={{
              marginLeft: 12,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            My Bids
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyWatching')}
          style={styles.bidContainer}>
          <Icon name="eye-outline" size={28} color="#000" />
          <Text
            style={{
              marginLeft: 12,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Watching
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  renderItemContainer: {
    height: 200,
    marginBottom: 16,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    overflow: 'hidden',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderColor: '#aaa',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bidContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
