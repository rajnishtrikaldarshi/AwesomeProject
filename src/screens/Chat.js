import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {userData} from '../data/constant';
import {generateChatbotResponse} from '../PureFunctions';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef();

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const timestamp = new Date().toLocaleTimeString();

    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: String(prevMessages.length + 1),
        text: inputText,
        sender: 'user',
        timestamp,
      },
    ]);

    const botResponse = generateChatbotResponse(inputText);

    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: String(prevMessages.length + 1),
          text: botResponse,
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
    }, 1000);

    setInputText('');
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({animated: true});
  }, [messages]);

  const renderMessage = ({item}) => {
    return (
      <View
        style={[
          styles.messageContainer,
          item.sender === 'user' ? styles.userMessage : styles.botMessage,
        ]}>
        <View style={styles.iconContainer}>
          <Icon
            name={item.sender === 'user' ? 'person' : 'android'}
            size={30}
            color={item.sender === 'user' ? '#4CAF50' : '#3b5998'}
          />
        </View>
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </View>
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Header
        title="Chat"
        onMenuPress={toggleModal}
        onBack={() => navigation.goBack()}
      />

      {messages && messages.length < 5 ? (
        <View style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Icon name="person-outline" size={30} color="#ffffff" />
          </View>
          <Text style={styles.profileLabel}>Name:</Text>
          <Text style={styles.profileText}>Rajnish Trikaldarshi</Text>
          <Text style={styles.profileLabel}>E-mail:</Text>
          <Text style={styles.profileText}>rajnishtrikaldarshi@gmail.com</Text>
        </View>
      ) : null}

      {modalVisible && (
        <HamburgerMenu
          modalVisible={modalVisible}
          user={userData}
          toggleModal={toggleModal}
          navigation={navigation}
        />
      )}

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.messagesList}
        contentContainerStyle={{marginBottom: 80}}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Write a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Icon name="send" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  profileContainer: {
    backgroundColor: '#ffffff',
    marginVertical: 20,
    marginHorizontal: 40,
    borderRadius: 20,
    padding: 20,
    marginTop: 50,
  },
  profileIconContainer: {
    position: 'absolute',
    top: '-30%',
    left: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 50,
  },
  profileLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  profileText: {
    fontSize: 16,
  },
  messagesList: {
    flex: 1,
    marginBottom: 100,
  },
  messageContainer: {
    flexDirection: 'row',
    maxWidth: '80%',
    marginVertical: 5,
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  botMessage: {
    backgroundColor: '#e5e5e5',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  messageContent: {
    flexDirection: 'column',
    maxWidth: '85%',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    paddingVertical: 16,
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  sendButton: {
    position: 'absolute',
    right: 10,
  },
});

export default Chat;
