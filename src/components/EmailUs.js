import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SocialMediaList from './SocialMedalList';

const EmailUs = ({title, desc, subTitle, desc1, icon, socialProfile}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{subTitle}</Text>
      <View style={styles.bottomSection}>
        {icon ? <Icon name={icon} size={30} color="#000" /> : null}
        {desc && desc1 ? (
          <View style={styles.row}>
            <Text style={styles.columnText}>{desc}</Text>
            <Text style={styles.columnSubText}>{desc1}</Text>
          </View>
        ) : null}
      </View>
      {socialProfile ? <SocialMediaList /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  row: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  columnText: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 4,
  },
  columnSubText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: '800',
    fontWeight: 'bold',
  },
});

export default EmailUs;
