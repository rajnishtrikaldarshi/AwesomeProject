import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RowItem = ({iconName, text, onPress}) => (
  <TouchableOpacity style={styles.rowContainer} onPress={onPress}>
    <View style={styles.rowContent}>
      <Icon name={iconName} size={24} style={styles.icon} color="#000" />
      <Text style={styles.rowText}>{text}</Text>
    </View>
    <Icon name="chevron-forward" size={24} color="#aaa" />
  </TouchableOpacity>
);

export default RowItem;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 12,
  },
  rowText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
