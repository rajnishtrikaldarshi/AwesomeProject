import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon
        name={'chatbox-ellipses-outline'}
        size={30}
        color="#fff"
        style={styles.icon}
      />
      <Text style={styles.text}>Live Chat</Text>
    </TouchableOpacity>
  );
};

const LiveChatButton = () => {
  const handleLiveChatPress = () => {
    console.log('Live Chat button pressed!');
  };

  return (
    <View style={styles.container}>
      <ChatButton onPress={handleLiveChatPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#000',
    borderRadius: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
});

export default LiveChatButton;
