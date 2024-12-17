import React from 'react';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import {socialMediaPlatforms} from '../data/constant';

const SocialMediaRow = ({icon, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.rowContainer} onPress={onPress}>
      <Image source={{uri: icon}} style={styles.icon} />
    </TouchableOpacity>
  );
};

const SocialMediaList = () => {
  const handlePress = url => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  return (
    <FlatList
      data={socialMediaPlatforms}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <SocialMediaRow
          icon={item.icon}
          name={item.name}
          onPress={() => handlePress(item.url)}
        />
      )}
      numColumns={10}
    />
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    padding: 12,
    paddingLeft: 0,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default SocialMediaList;
