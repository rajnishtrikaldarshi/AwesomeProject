import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RateApp = ({onRatePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Happy to get your feedback</Text>
        <TouchableOpacity style={styles.button} onPress={onRatePress}>
          <Icon name="star-outline" size={22} color="#FFFFFF" />
          <Text style={styles.buttonText}>Rate App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RateApp;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF9C4',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 50,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
