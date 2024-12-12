import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {termsAndConditions, userData} from '../data/constant';

const TermAndConditions = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };
  return (
    <View style={{flex: 1}}>
      <Header
        title="Terms & Conditions"
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
      <ScrollView>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 24,
            paddingLeft: 16,
            paddingVertical: 18,
            borderLeftWidth: 8,
            borderLeftColor: '#007BFF',
            borderBottomColor: '#aaa',
            borderBottomWidth: 0.6,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000'}}>
            Terms & Conditions
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 24,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
              color: '#000',
            }}>
            Emirates Auction’s terms and conditions of {'\n'}
            {'\n'}public auction shall apply, along with the {'\n'}
            {'\n'}following terms and conditions
          </Text>

          {termsAndConditions &&
            termsAndConditions.map((item, index) => {
              return (
                <Text
                  key={index.toString()}
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 12,
                    color: '#000',
                  }}>
                  {item}
                </Text>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TermAndConditions;
