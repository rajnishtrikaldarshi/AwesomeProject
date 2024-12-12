import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Header = ({
  onBack,
  onMenuPress,
  toggleFilter,
  title = 'Auction House',
  showFilter = false,
  showSearch = false,
}) => {
  return (
    <>
      <View style={{...styles.header, paddingHorizontal: onBack ? 0 : 15}}>
        {onBack ? (
          <TouchableOpacity onPress={onBack} style={styles.iconButton}>
            <Icon name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.title}>{title}</Text>

        {showFilter ? (
          <TouchableOpacity onPress={toggleFilter}>
            <AntIcon
              name="filter"
              size={24}
              color="#FFFFFF"
              style={{
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        ) : null}
        {showSearch ? (
          <TouchableOpacity>
            <Icon name="search" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Icon name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#007BFF',
  },
  iconButton: {
    padding: 10,
  },
  title: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subHeaderTextStyle: {fontWeight: 'bold', fontSize: 16, color: '#007BFF'},
});

export default Header;
