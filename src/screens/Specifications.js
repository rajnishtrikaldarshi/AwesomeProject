import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {carSpecificationData, userData} from '../data/constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Specifications = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };

  const renderSpecificationItem = item => (
    <View style={styles.specificationItem} key={item.title}>
      <Icon name={item.icon} size={40} color="#000" />
      <Text style={styles.specificationName}>{item.name}</Text>
      <Text style={styles.specificationTitle}>{item.title}</Text>
    </View>
  );

  const renderCarSpecificationItem = item => (
    <View style={styles.carSpecificationItem} key={item.key}>
      <View style={styles.carSpecificationTextContainer}>
        <Icon name={item.icon} size={30} />
        <Text style={styles.carSpecificationKey}>{item.key}</Text>
      </View>
      <Text style={styles.carSpecificationValue}>{item.value}</Text>
    </View>
  );

  const topSpecifications = [
    {title: 'Seats', name: '7', icon: 'seat'},
    {title: 'Fuel', name: 'Petrol', icon: 'fuel'},
    {title: 'Doors', name: '4', icon: 'car-door'},
  ];

  const bottomSpecifications = [
    {title: 'Year', name: '2018', icon: 'calendar'},
    {title: 'Odometer', name: 'N/A', icon: 'speedometer'},
    {title: 'Country', name: 'India', icon: 'globe-model'},
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Specifications"
        onMenuPress={toggleModal}
        onBack={() => navigation.goBack()}
      />
      {modalVisible && (
        <HamburgerMenu
          modalVisible={modalVisible}
          user={userData}
          toggleModal={toggleModal}
          navigation={navigation}
        />
      )}
      <View style={styles.specificationsRow}>
        {topSpecifications.map(renderSpecificationItem)}
      </View>
      <View style={styles.specificationsRow}>
        {bottomSpecifications.map(renderSpecificationItem)}
      </View>
      <View style={{marginBottom: 24}} />
      {carSpecificationData &&
        carSpecificationData.map(renderCarSpecificationItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  specificationsRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 16,
    gap: 8,
  },
  specificationItem: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    borderColor: '#aaa',
  },
  specificationName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  specificationTitle: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  carSpecificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  carSpecificationTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carSpecificationKey: {
    marginLeft: 12,
    fontSize: 18,
  },
  carSpecificationValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Specifications;
