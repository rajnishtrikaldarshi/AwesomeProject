import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const InfoCard = ({item, navigation}) => {
  let {image, title, start_production} = item || {};
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('InfoDetails', {...item})}>
      <ImageBackground
        source={{uri: image}}
        style={styles.container}
        imageStyle={styles.image}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.companyName}>
            {start_production ? start_production : item?.class}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    marginVertical: 10,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Add opacity
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  companyName: {
    color: '#FFF',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default InfoCard;
