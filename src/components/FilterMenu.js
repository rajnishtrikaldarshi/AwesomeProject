import React, {useRef, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

// Reducer function
const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return {...state, currentScreen: action.payload};
    case 'SET_TYPE':
      return {...state, selectedType: action.payload};
    case 'SET_PRICE':
      return {...state, selectedPrice: action.payload};
    case 'RESET_FILTERS':
      return {...state, selectedType: 'All', selectedPrice: 'All'};
    default:
      return state;
  }
};

const FilterMenu = ({toggleModal, modalVisible, onApplyFilters}) => {
  const slideAnim = useRef(new Animated.Value(width)).current;

  const [state, dispatch] = useReducer(filterReducer, {
    currentScreen: 'main',
    selectedType: 'All',
    selectedPrice: 'All',
  });

  const {currentScreen, selectedType, selectedPrice} = state;

  const openModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      toggleModal && toggleModal();
      dispatch({type: 'SET_SCREEN', payload: 'main'});
    });
  };

  const resetFilters = () => {
    dispatch({type: 'RESET_FILTERS'});
  };

  const renderFilters = () => {
    const filters = [];
    if (selectedType !== 'All')
      filters.push({type: 'Type', value: selectedType});
    if (selectedPrice !== 'All')
      filters.push({type: 'Price', value: selectedPrice});

    return filters.length > 0 ? (
      <View style={styles.filterContainer}>
        {filters.map((filter, index) => (
          <View key={index} style={styles.filter}>
            <Text style={styles.filterText}>
              {filter.type}: {filter.value}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (filter.type === 'Type')
                  dispatch({type: 'SET_TYPE', payload: 'All'});
                if (filter.type === 'Price')
                  dispatch({type: 'SET_PRICE', payload: 'All'});
              }}>
              <Icon name="close-circle" size={20} color="#FF0000" />
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity onPress={resetFilters} style={styles.clearAllButton}>
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  const renderOption = (option, onPress) => (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      {option.icon ? (
        <Icon name={option.icon} size={28} color="#aaa" style={{width: 30}} />
      ) : null}
      <Text style={styles.optionText}>{option.name}</Text>
    </TouchableOpacity>
  );

  const renderMainScreen = () => (
    <View style={styles.menu}>
      {renderFilters()}
      {renderOption({name: 'Car Type', icon: 'car-outline'}, () =>
        dispatch({type: 'SET_SCREEN', payload: 'type'}),
      )}
      {renderOption({name: 'Price', icon: 'pricetag'}, () =>
        dispatch({type: 'SET_SCREEN', payload: 'price'}),
      )}
    </View>
  );

  const renderTypeScreen = () => {
    const types = [
      {name: 'All'},
      {name: 'suv'},
      {name: 'sedan'},
      {name: 'hatchback'},
      {name: 'fType'},
    ];
    return (
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => dispatch({type: 'SET_SCREEN', payload: 'main'})}>
          <Icon name="arrow-back" size={24} color="#FFF" />
          <Text style={styles.backText}>Car Type</Text>
        </TouchableOpacity>
        <FlatList
          data={types}
          keyExtractor={(item, index) => `${item.name}_${index}`}
          renderItem={({item}) =>
            renderOption(item, () => {
              dispatch({type: 'SET_TYPE', payload: item.name});
              dispatch({type: 'SET_SCREEN', payload: 'main'});
            })
          }
        />
      </View>
    );
  };

  const renderPriceScreen = () => {
    const prices = [
      {name: 'All'},
      {name: '100'},
      {name: '200'},
      {name: '300'},
      {name: '400'},
      {name: '500'},
    ];
    return (
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => dispatch({type: 'SET_SCREEN', payload: 'main'})}>
          <Icon name="arrow-back" size={24} color="#fff" />
          <Text style={styles.backText}>Price</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select Price</Text>
        <FlatList
          data={prices}
          keyExtractor={(item, index) => `${item.name}_${index}`}
          renderItem={({item}) =>
            renderOption(item, () => {
              dispatch({type: 'SET_PRICE', payload: item.name});
              dispatch({type: 'SET_SCREEN', payload: 'main'});
            })
          }
        />
      </View>
    );
  };

  const renderContent = () => {
    switch (currentScreen) {
      case 'type':
        return renderTypeScreen();
      case 'price':
        return renderPriceScreen();
      default:
        return renderMainScreen();
    }
  };

  if (modalVisible) {
    openModal();
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={closeModal}
        />
        <Animated.View
          style={[
            styles.modalContainer,
            {transform: [{translateX: slideAnim}]},
          ]}>
          {currentScreen === 'main' ? (
            <View style={styles.header}>
              <TouchableOpacity activeOpacity={1} style={styles.headerButton}>
                <Text style={styles.headerText}>Filters</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  closeModal();
                  onApplyFilters &&
                    onApplyFilters({selectedType, selectedPrice});
                }}
                style={styles.headerButton}>
                <Text style={{...styles.headerText, alignSelf: 'flex-end'}}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {renderContent()}
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F5F5'},
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007BFF',
    padding: 10,
  },
  headerButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  headerText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
  },
  clearAllButton: {
    backgroundColor: '#FF0000',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  clearAllText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  menu: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 17,
    backgroundColor: '#007BFF',
  },
  backText: {
    color: '#FFF',
    fontSize: 18,
    marginLeft: 12,
    fontWeight: 'bold',
  },
});

export default FilterMenu;
