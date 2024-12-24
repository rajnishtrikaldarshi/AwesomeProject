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
import {bottomDetailData, userData} from '../data/constant';
import {useCars} from '../context/CarsProvider';

const {width} = Dimensions.get('window');

const InfoCardDetail = ({navigation, route}) => {
  let {
    id,
    image,
    price,
    description,
    LotNo,
    placeBid = false,
  } = route.params || {};

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  let {cars, updateCar} = useCars();
  let watchCar = cars.find(car => car.id === id)?.watchCar || false;
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
            <Text style={{color: '#FFFFFF', fontSize: 18}}>AED {price}</Text>
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
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>

        <View>
          <View style={{flex: 1}}>
            <Text
              style={{
                marginLeft: 16,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Specifications
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 16,
                marginLeft: 16,
                marginRight: 16,
                margin: 12,
                gap: 8,
              }}>
              {[
                {title: 'Seats', name: '7', icon: 'seat'},
                {title: 'Fuel', name: 'Petrol', icon: 'fuel'},
                {title: 'Doors', name: '4', icon: 'car-door'},
              ].map((item, index) => (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 10,
                    borderColor: '#aaa',
                  }}
                  key={index}>
                  <Icon name={item.icon} size={40} color="#000" />
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: '#000',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 8,
                      fontSize: 16,
                      textAlign: 'center',
                      color: '#aaa',
                    }}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 16,
                marginRight: 16,
                gap: 8,
              }}>
              {[
                {title: 'Year', name: '2018', icon: 'calendar'},
                {title: 'Odometer', name: 'N/A', icon: 'speedometer'},
                {title: 'Country', name: 'India', icon: 'globe-model'},
              ].map((item, index) => (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 12,
                    padding: 10,
                    borderColor: '#aaa',
                  }}
                  key={index}>
                  <Icon name={item.icon} size={40} color="#000" />
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: '#000',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 8,
                      fontSize: 16,
                      textAlign: 'center',
                      color: '#aaa',
                    }}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Specifications')}
            style={{
              borderWidth: 1,
              borderColor: '#aaa',
              marginHorizontal: 16,
              borderRadius: 16,
              padding: 16,
              marginTop: 12,
              marginBottom: 8,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#000',
              }}>
              View all Specifications
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calculateContainer}>
          {bottomDetailData.map((item, index) => {
            if (item?.name !== 'Specifications') {
              return (
                <View
                  key={index.toString()}
                  style={{
                    ...styles.calculateBox,
                    borderBottomWidth: index === 3 ? 0 : 1,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}>
                  <TouchableOpacity
                    onPress={() => item && item.onPress(navigation)}
                    style={styles.calculateButton}>
                    <Text style={styles.calculateText}>{item.name}</Text>
                    <Icon name="chevron-right" size={20} color="#000000" />
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            margin: 16,
            marginBottom: 130,
          }}>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: 'row',
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Icon name="share" size={24} color="#fff" />
            <Text
              style={{
                color: '#fff',
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Share
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              updateCar(id, {watchCar: !watchCar});
            }}
            style={{
              flex: 1,
              padding: 16,
              flexDirection: 'row',
              backgroundColor: '#000',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Icon
              name={watchCar ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#fff"
            />
            <Text
              style={{
                color: '#fff',
                marginLeft: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {watchCar ? 'Unwatch' : 'Watch'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        {placeBid ? (
          <TouchableOpacity
            onPress={() => {
              updateCar(id, {placeBid: false, bidPrice: null});
              navigation.goBack();
            }}
            style={styles.bidButton}>
            <Text style={styles.bidButtonText}>REMOVE BID</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('BidDetail', {...route?.params});
            }}
            style={styles.bidButton}>
            <Text style={styles.bidButtonText}>BID NOW</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InfoCardDetail;

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
