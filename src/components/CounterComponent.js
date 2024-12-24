import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CounterComponent = ({mainPrice, setBidPrice}) => {
  const [counter, setCounter] = useState(mainPrice);

  const handleIncrement = () => {
    setCounter(counter + 100);
    setBidPrice(counter);
  };
  const handleDecrement = () => {
    if (counter > mainPrice) {
      setCounter(counter - 100);
      setBidPrice(counter);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Icon name="plus" size={24} color="grey" />
        </TouchableOpacity>
        <Text style={styles.priceText}>
          <Text style={{color: 'grey'}}>AED</Text> {counter.toLocaleString()}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Icon name="minus" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  priceText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#000',
    flex: 1,
    textAlign: 'center',
    paddingTop: 10,
  },
  counterText: {
    fontSize: 20,
    fontWeight: '600',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#007BFF',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
});
