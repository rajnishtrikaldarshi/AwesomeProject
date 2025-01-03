import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import RowItem from '../components/RowItem';
import TextWithArrow from '../components/TextWithArrow';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyAccountScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="My Account" onBack={() => navigation.goBack()} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ProfileSection
          profileImage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg"
          profileName="Rajnish Trikaldarshi"
          linkText="Link with UAE PASS"
        />

        <Text style={styles.sectionLabel}>Bidding Limit</Text>
        <TextWithArrow
          title="Add Deposit Now"
          subtitle="Empower Your Bidding Journey"
        />

        <Text style={styles.sectionLabel}>Your Activity</Text>
        <View style={styles.rowContainer}>
          {[
            {
              name: 'My Bids',
              icon: 'hammer-outline',
              onPress: () => {
                navigation.navigate('MyBids');
              },
            },
            {name: 'My Wishlist', icon: 'heart-outline'},
            {name: 'My Won Items', icon: 'trophy-outline'},
          ].map((item, index) => (
            <View style={styles.activityCard} key={index}>
              <Icon name={item.icon} size={40} color="#000" />
              <Text style={styles.activityTitle}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.rowContainer}>
          {[
            {name: 'My Cart', icon: 'cart-outline'},
            {name: 'My Purchases', icon: 'lock-closed-outline'},
            {
              name: 'Recent Watching',
              icon: 'eye-outline',
              onPress: () => {
                navigation.navigate('MyWatching');
              },
            },
          ].map((item, index) => (
            <View style={styles.activityCard} key={index}>
              <Icon name={item.icon} size={40} color="#000" />
              <Text style={styles.activityTitle}>{item.name}</Text>
            </View>
          ))}
        </View>
        {[
          {icon: 'document-lock-outline', text: 'My Documents'},
          {icon: 'home-outline', text: 'Saved Bank Account'},
        ].map((item, index) => (
          <React.Fragment key={index}>
            <RowItem iconName={item.icon} text={item.text} onPress={() => {}} />
            {index < 1 && <View style={styles.divider} />}
          </React.Fragment>
        ))}
        <Text style={styles.sectionLabel}>Communication Center</Text>
        {[
          {icon: 'git-compare-outline', text: 'Communication Prefernces'},
          {icon: 'trash-outline', text: 'Delete my Account'},
          {
            icon: 'log-out-outline',
            onPress: async () => {
              await AsyncStorage.removeItem('userToken');
              navigation.navigate('Login');
            },
            text: 'Logout',
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <RowItem
              iconName={item.icon}
              text={item.text}
              onPress={() => {
                item.onPress && item.onPress();
              }}
            />
            {index < 1 && <View style={styles.divider} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  sectionLabel: {
    marginLeft: 16,
    color: 'lightgrey',
    marginTop: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    margin: 16,
    gap: 16,
  },
  activityCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  activityTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 12,
    marginBottom: 18,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
  },
});
