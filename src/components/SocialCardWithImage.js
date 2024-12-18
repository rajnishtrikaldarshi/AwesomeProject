import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyComponent = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.cardContainer}>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.imageBackground}
        imageStyle={styles.imageBorderRadius}>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0.03)',
            'rgba(255,255,255,0.3)',
            'rgba(255,255,255,0.7)',
            'rgba(255,255,255,0.9)',
            'white',
          ]}
          locations={[0, 0.4, 0.6, 0.8, 1]}
          style={styles.gradientOverlay}>
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>
              <Text style={{color: '#007BFF'}}>{item.title} </Text>
              {item.subTitle}
            </Text>
            <View style={styles.circleButton}>
              <MaterialCommunityIcons name="plus" size={28} color="#fff" />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: 'grey',
  },
  imageBackground: {
    height: 500,
    justifyContent: 'flex-end',
  },
  imageBorderRadius: {
    borderRadius: 15,
  },
  gradientOverlay: {
    height: '70%',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 20,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 12,
  },
});

export default MyComponent;
