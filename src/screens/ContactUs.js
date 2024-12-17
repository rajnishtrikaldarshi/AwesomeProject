import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import EmailUs from '../components/EmailUs';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {userData} from '../data/constant';
import LiveChatButton from '../components/LiveChatButton';

const ContactUs = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Data for rendering items
  const contactItems = [
    {
      id: '1',
      title: 'Email Us',
      subTitle:
        'Reach out to us via email and a customer service representative will respond as soon as possible.',
      desc: 'Email Address',
      desc1: 'rajnish@roothoot.com',
      icon: 'mail-unread-outline',
    },
    {
      id: '2',
      title: 'Call Us',
      subTitle:
        'Our customer support is available around the clock to assist with any concerns.',
      desc: 'Mobile',
      desc1: '+91 8780359890',
      icon: 'headset-outline',
    },
    {
      id: '3',
      title: 'Get in Touch',
      subTitle:
        'Stay updated with our latest activities by visiting our social media pages.',
      socialProfile: true,
    },
  ];

  const renderItem = ({item}) => (
    <EmailUs
      title={item.title}
      subTitle={item.subTitle}
      desc={item.desc}
      desc1={item.desc1}
      icon={item.icon}
      socialProfile={item.socialProfile}
    />
  );

  return (
    <View style={styles.container}>
      <Header
        title={'Contact Us'}
        onMenuPress={toggleModal}
        onBack={() => navigation.goBack()}
      />
      <FlatList
        data={contactItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
      {modalVisible && (
        <HamburgerMenu
          modalVisible={modalVisible}
          user={userData}
          toggleModal={toggleModal}
          navigation={navigation}
        />
      )}
      <View style={styles.liveChatContainer}>
        <LiveChatButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  listContent: {
    paddingBottom: 80,
  },
  liveChatContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ContactUs;
