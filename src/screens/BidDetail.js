import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {userData} from '../data/constant';
import {formatNumberWithCommas} from '../PureFunctions';
import CounterComponent from '../components/CounterComponent';
import ProxyBidsComponent from '../components/ProxyBidComponent';
import {useCars} from '../context/CarsProvider';

const {width} = Dimensions.get('window');

const BidDetail = ({navigation, route}) => {
  let {id, image, price, LotNo, bids} = route.params || {};

  const [bidPrice, setBidPrice] = useState(price);

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const {updateCar} = useCars();

  return (
    <View style={styles.container}>
      <Header
        title={LotNo}
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

      <ScrollView contentContainerStyle={{}}>
        {image ? (
          <Image source={{uri: image}} style={styles.carImage} />
        ) : (
          <View style={styles.carImage} />
        )}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 16, backgroundColor: '#007BFF'}}>
            <Text style={{color: '#FFFFFF', fontSize: 16}}>Current Price</Text>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>
              AED {formatNumberWithCommas(price)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
            }}>
            <Text style={{color: '#aaa', fontSize: 16}}>Minimum Increment</Text>
            <Text style={{color: '#000', fontSize: 18}}>AED 100</Text>
          </View>
        </View>
        <CounterComponent mainPrice={bidPrice} setBidPrice={setBidPrice} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 16,
            marginLeft: 16,
          }}>
          <Icon name="timelapse" size={24} color="#000" />
          <Text style={styles.descriptionText}>Time Remaining: 1d:2h</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 16,
            marginTop: 8,
          }}>
          <Icon name="hammer-screwdriver" size={24} color="#000" />
          <Text style={styles.descriptionText}>Number of Bids: {bids}</Text>
        </View>
        <ProxyBidsComponent />
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            updateCar(id, {placeBid: true, bidPrice: bidPrice});
            navigation.navigate('Home');
          }}
          style={styles.bidButton}>
          <Text style={styles.bidButtonText}>PLACE BID</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BidDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  carImage: {
    width: width,
    height: 300,
    resizeMode: 'cover',
    objectFit: 'fill',
  },
  descriptionContainer: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginLeft: 8,
  },
  calculateContainer: {
    margin: 20,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  calculateBox: {
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calculateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
  },
  calculateText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  bottomContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0.5,
    borderColor: '#aaa',
  },
  bidButton: {
    backgroundColor: '#007BFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  bidButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
