import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Corrected import

const MyComponent = () => {
  return (
    <ImageBackground
      source={{uri: 'https://your-image-url.com'}} // Replace with your image URL
      style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>6 or 7 words here</Text>
        <View style={styles.circleButton}>
          <MaterialCommunityIcons name="plus" size={24} color="white" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
