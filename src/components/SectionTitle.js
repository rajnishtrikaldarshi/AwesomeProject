import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SectionTitle = ({iconName, title}) => (
  <View style={styles.container}>
    {iconName && (
      <Icon name={iconName} size={24} color="#007BFF" style={styles.icon} />
    )}
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
