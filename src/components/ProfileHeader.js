import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ProfileHeader = ({profileName, profileImageUri}) => (
  <View style={styles.container}>
    <Image source={{uri: profileImageUri}} style={styles.profilePicture} />
    <Text style={styles.profileName}>{profileName}</Text>
  </View>
);

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
  },
});
