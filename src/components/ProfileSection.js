import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

const ProfileSection = ({profileImage, profileName, linkText}) => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Image source={{uri: profileImage}} style={styles.profilePicture} />
      <Text style={styles.profileName}>{profileName}</Text>
    </View>
    <TouchableOpacity style={styles.linkContainer}>
      <Text style={styles.linkText}>{linkText}</Text>
    </TouchableOpacity>
  </View>
);

export default ProfileSection;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 16,
    margin: 16,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    color: '#000',
  },
  linkContainer: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  linkText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
