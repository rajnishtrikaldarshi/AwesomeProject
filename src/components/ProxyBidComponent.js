import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProxyBidsComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleSwitch = () => setIsEnabled(!isEnabled);
  const toggleRadio = () => setIsSelected(!isSelected);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleWithInfo}>
          <Text style={styles.title}>Proxy Bids</Text>
          <TouchableOpacity style={styles.infoButton}>
            <Icon name="information-outline" size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            {backgroundColor: isSelected ? '#007BFF' : '#fff'},
          ]}
          onPress={toggleRadio}>
          {isSelected && <View style={styles.radioInnerCircle} />}
        </TouchableOpacity>
        <Text style={styles.radioDescription}>
          I confirm that I have inspected the vehicle & accept its conditions
          and i accept the terms & condition for the same vehicle
        </Text>
      </View>
    </View>
  );
};

export default ProxyBidsComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderColor: '#ddd',
    marginBottom: 150,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleWithInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoButton: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  radioDescription: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
});
