import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {socialData} from '../data/constant';
import Icon from 'react-native-vector-icons/Ionicons';
import MyComponent from './SocialCardWithImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SocialBottomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null); // ScrollView reference

  const openModal = index => {
    setCurrentIndex(index);
    setModalVisible(true);
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
    }, 0);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const goToNextItem = () => {
    const nextIndex = (currentIndex + 1) % socialData.length; // Cycles back to 0
    setCurrentIndex(nextIndex);
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
    }, 0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={socialData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <MyComponent item={item} onPress={() => openModal(index)} />
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <MaterialCommunityIcons name="close" size={28} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>
                <Text style={{color: '#007BFF'}}>
                  {socialData[currentIndex].title}
                </Text>
                {socialData[currentIndex].subTitle}
              </Text>
              <Text style={styles.modalDescription}>
                {socialData[currentIndex].desc}
              </Text>
              <Image
                source={{uri: socialData[currentIndex].image}}
                style={styles.modalImage}
              />
              <View style={{backgroundColor: '#007BFF1A', padding: 16}}>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: '500',
                    fontSize: 16,
                    marginBottom: 8,
                  }}>
                  Next Event
                </Text>
                <Text style={{color: '#000', fontWeight: '500', fontSize: 24}}>
                  {socialData[(currentIndex + 1) % socialData.length]?.title}{' '}
                  {socialData[(currentIndex + 1) % socialData.length]?.subTitle}
                </Text>
                <TouchableOpacity
                  style={styles.nextButton}
                  onPress={goToNextItem}>
                  <Text style={styles.nextButtonText}>Next Topic</Text>
                  <Icon name="chevron-forward" size={24} color="#007bff" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    marginVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    maxHeight: '92.5%',
  },
  closeButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 16,
    marginBottom: 0,
  },

  modalTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    paddingHorizontal: 36,
  },
  modalImage: {
    height: 250,
    borderRadius: 10,
    marginVertical: 25,
    marginLeft: 16,
    marginRight: 16,
  },
  modalDescription: {
    fontSize: 17,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
    paddingHorizontal: 36,
  },
  nextButton: {
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
  },
  nextButtonText: {
    color: '#007BFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
});

export default SocialBottomModal;
