import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  Easing,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RateApp from './RateApp';
import TextWithArrow from './TextWithArrow';

const {width} = Dimensions.get('window');

const HamburgerMenu = ({user, toggleModal, modalVisible, navigation}) => {
  const slideAnim = useRef(new Animated.Value(width)).current; // Start off-screen to the right

  const openModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      toggleModal && toggleModal();
    });
  };

  // Trigger animation on modal visibility change
  if (modalVisible) {
    openModal();
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="none" // Disable default animation
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        {/* Overlay */}
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={closeModal}
        />

        {/* Animated Slide-In View */}
        <Animated.View
          style={[
            styles.modalContainer,
            {transform: [{translateX: slideAnim}]}, // Apply sliding animation
          ]}>
          {/* User Info */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileDetails')}
            style={styles.profileContainer}>
            <Image
              source={{uri: user.profileImage}}
              style={styles.profileImage}
            />
            <View style={{marginLeft: 20, marginBottom: 10}}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
          </TouchableOpacity>

          <TextWithArrow
            title="Add Deposit Now"
            subtitle="Empower Your Bidding Journey"
          />

          {/* Menu Options */}
          <ScrollView
            style={styles.optionsContainer}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.option}>
              <Icon name="home-outline" size={24} />
              <Text style={styles.optionText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MyAccount');
              }}
              style={styles.option}>
              <Icon name="people-outline" size={24} />
              <Text style={styles.optionText}>Account</Text>
            </TouchableOpacity>

            <View style={{height: 1, backgroundColor: 'lightgrey'}} />
            <Text style={{padding: 16, color: 'lightgrey'}}>
              Engage & Discover
            </Text>
            <TouchableOpacity style={styles.option}>
              <Image
                source={{uri: user.profileImage}}
                style={{height: 20, width: 20}}
              />
              <Text style={styles.optionText}>About Auctions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="location-outline" size={24} />
              <Text style={styles.optionText}>Find Branches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="hand-right-outline" size={24} />
              <Text style={styles.optionText}>Start a Partnership</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="server-outline" size={24} />
              <Text style={styles.optionText}>Our Service</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="cart-outline" size={24} />
              <Text style={styles.optionText}>Our Fleet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="id-card-outline" size={24} />
              <Text style={styles.optionText}>Awards & Achievements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="id-card-outline" size={24} />
              <Text style={styles.optionText}>Sell Your Vehicle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="newspaper-outline" size={24} />
              <Text style={styles.optionText}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SocialResponisibility')}
              style={styles.option}>
              <Icon name="people-outline" size={24} />
              <Text style={styles.optionText}>Social Resoponsibilities</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ContactUs')}
              style={styles.option}>
              <Icon name="call-outline" size={24} />
              <Text style={styles.optionText}>Contact Us</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.option}>
              <Icon name="trophy" size={24}  />
              <Text style={styles.optionText}>Bid Winner</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="chatbubbles" size={24}  />
              <Text style={styles.optionText}>Chats</Text>
            </TouchableOpacity> */}
            <RateApp />
            <TouchableOpacity style={styles.option}>
              <Icon name="terminal-outline" size={24} />
              <Text style={styles.optionText}>Term & Conditions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="help-buoy-outline" size={24} />
              <Text style={styles.optionText}>Help/FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.option, marginBottom: 40}}>
              <Icon name="chatbox-outline" size={24} />
              <Text style={styles.optionText}>Chat</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Bottom Options */}
          {/* <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.option}>
              <Icon name="settings" size={24} color="#666" />
              <Text style={styles.optionText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Icon name="help-circle" size={24} color="#666" />
              <Text style={styles.optionText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={closeModal}>
              <Icon name="log-out" size={24} color="#666" />
              <Text style={[styles.optionText]}>Logout</Text>
            </TouchableOpacity>
          </View> */}
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: width * 0.9,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: 'red',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  userEmail: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  optionsContainer: {
    // padding: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 16,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    left: 20,
  },
});

export default HamburgerMenu;
