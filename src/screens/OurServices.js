import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import HamburgerMenu from '../components/HamburgerMenu';
import {socialData, userData} from '../data/constant';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width} = Dimensions.get('window');

const carouselItems = [
  {
    id: 1,
    image: 'https://your-image-url-1.com',
    title: 'Service One',
    subTitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac urna velit.',
  },
  {
    id: 2,
    image: 'https://your-image-url-2.com',
    title: 'Service Two',
    subTitle:
      'Duis volutpat velit ut nulla ornare, vel lacinia justo tincidunt. Nulla facilisi.',
  },
  {
    id: 3,
    image: 'https://your-image-url-3.com',
    title: 'Service Three',
    subTitle:
      'Proin vitae velit varius, mollis augue a, volutpat justo. Curabitur at est et odio feugiat.',
  },
  {
    id: 4,
    image: 'https://your-image-url-4.com',
    title: 'Service Four',
    subTitle:
      'Curabitur ut metus eget felis cursus iaculis. Nulla facilisi. Ut euismod libero sit amet.',
  },
  {
    id: 5,
    image: 'https://your-image-url-5.com',
    title: 'Service Five',
    subTitle:
      'Nunc feugiat ligula at diam suscipit, ac rhoncus mi dictum. Integer non libero dolor.',
  },
];

const OurServices = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const scrollToNext = () => {
    const nextIndex = (currentIndex + 2) % socialData.length;
    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
  };

  const renderCarouselItem = ({item}) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{uri: item.image}} style={styles.carouselImage} />
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselSubtitle}>
          {item.subTitle}
          {item.subTitle}
          {item.subTitle}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Our Services'}
        onMenuPress={toggleModal}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ImageBackground
          source={{
            uri: 'https://www.apu.apus.edu/images/site/apu/social-media.jpg',
          }}
          style={styles.image}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />
        </ImageBackground>

        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            euismod mauris vitae lorem sodales, at aliquet sem consequat.
            Suspendisse potenti. Vivamus bibendum augue et metus fermentum, a
            tincidunt erat elementum. Aliquam erat volutpat. Curabitur vulputate
            turpis ut vehicula vehicula. Nullam vel libero non odio posuere
            convallis.
          </Text>
          <Text style={styles.paragraph}>
            Duis ac ex non orci suscipit vulputate. Etiam id justo sit amet
            justo viverra ullamcorper.
          </Text>
        </View>

        <View style={styles.carouselContainer}>
          <FlatList
            ref={flatListRef}
            data={socialData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={renderCarouselItem}
            pagingEnabled
            snapToInterval={width / 2 - 30}
            snapToAlignment="start"
            onMomentumScrollEnd={event => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x / (width / 2 - 30),
              );
              setCurrentIndex(newIndex);
            }}
            style={styles.carouselList}
          />
        </View>
      </ScrollView>

      {modalVisible && (
        <HamburgerMenu
          modalVisible={modalVisible}
          user={userData}
          toggleModal={toggleModal}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  scrollContent: {
    flexGrow: 1,
  },
  image: {
    height: 300,
    width: '100%',
    justifyContent: 'flex-end',
  },
  gradient: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  textContainer: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  paragraph: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  carouselContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  carouselItem: {
    width: width / 1.5,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    padding: 8,
  },
  carouselImage: {
    width: '100%',
    height: 170,
    marginBottom: 10,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  carouselSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  carouselList: {
    width: '100%',
  },
});

export default OurServices;
