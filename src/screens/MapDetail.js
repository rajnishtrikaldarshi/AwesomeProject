import React, {useState} from 'react';
import {View, PermissionsAndroid, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {userData} from '../data/constant';

const MapDetail = ({navigation}) => {
  const requestLocationPermission = async ({navigation}) => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location for maps',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  React.useEffect(() => {
    requestLocationPermission();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title="Map"
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

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{flex: 1}}
        initialRegion={{
          latitude: 40.712776, // New York City latitude
          longitude: -74.005974, // New York City longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
    </View>
  );
};

export default MapDetail;
