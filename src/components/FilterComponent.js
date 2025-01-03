import React, {useReducer, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

// Initial state and reducer
const initialState = {
  items: [],
  sortBy: null,
  sortOrder: 'asc',
  viewMode: 'normal',
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
        loading: false,
      };

    case 'SET_ERROR':
      return {...state, error: action.payload, loading: false};

    case 'SORT':
      const {key} = action.payload;
      const sortOrder =
        state.sortBy === key && state.sortOrder === 'asc' ? 'desc' : 'asc';
      const sortedItems = [...state.filteredItems].sort((a, b) => {
        if (sortOrder === 'asc') return a[key] - b[key];
        return b[key] - a[key];
      });
      return {
        ...state,
        filteredItems: sortedItems,
        sortBy: key,
        sortOrder,
      };

    case 'TOGGLE_VIEW':
      return {
        ...state,
        viewMode: state.viewMode === 'normal' ? 'list' : 'normal',
      };

    case 'SET_SEARCH_QUERY':
      const searchQuery = action.payload.toLowerCase();
      const filteredItems = state.items.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchQuery),
        ),
      );

      console.log(filteredItems);
      return {
        ...state,
        searchQuery: action.payload,
        filteredItems,
      };

    default:
      return state;
  }
};

const NormalItemView = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('InfoDetails', {...item})}
    style={styles.item}>
    <Image source={{uri: item.image}} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.lotNoCompact}>{item.LotNo}</Text>
      <Text style={styles.info}>Price: ${item.price.toLocaleString()}</Text>
      <Text style={styles.info}>Bids: {item.bids}</Text>
    </View>
  </TouchableOpacity>
);

const CompactItemView = ({item, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('InfoDetails', {...item})}
    style={styles.itemCompact}>
    <Image source={{uri: item.image}} style={styles.imageCompact} />
    <View style={styles.detailsCompact}>
      <Text style={styles.titleCompact}>{item.title}</Text>
      <Text style={styles.lotNoCompact}>Lot No: {item.LotNo}</Text>
      <Text style={styles.infoCompact}>Bids: {item.bids}</Text>
      <Text style={styles.infoCompact}>AED ${item.price.toLocaleString()}</Text>
    </View>
  </TouchableOpacity>
);

const FilterComponent = ({
  data,
  headerFilter = false,
  navigation,
  searchVisible,
  setSearchVisible,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({type: 'SET_ITEMS', payload: data});
      } catch (error) {
        dispatch({type: 'SET_ERROR', payload: error.message});
      }
    };

    fetchData();
  }, []);

  const renderItem = ({item, navigation}) => {
    return state.viewMode === 'normal' ? (
      <NormalItemView item={item} navigation={navigation} />
    ) : (
      <CompactItemView item={item} navigation={navigation} />
    );
  };

  if (state.loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (state.error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {state.error}</Text>
      </View>
    );
  }

  return (
    <View style={{marginBottom: 200}}>
      {!headerFilter ? (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch({type: 'SORT', payload: {key: 'price'}})}>
            <Text style={styles.buttonText}>
              Price
              {state.sortBy === 'price' ? (
                state.sortOrder === 'asc' ? (
                  <MaterialCommunityIcons
                    name="menu-down"
                    size={16}
                    color="#007bff"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="menu-up"
                    size={16}
                    color="#007bff"
                  />
                )
              ) : (
                <MaterialCommunityIcons
                  name="menu-down"
                  size={16}
                  color="#007bff"
                />
              )}
            </Text>
          </TouchableOpacity>
          <View
            style={{height: '100%', width: 2, backgroundColor: '#007bff'}}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch({type: 'SORT', payload: {key: 'year'}})}>
            <Text style={styles.buttonText}>
              Year
              {state.sortBy === 'year' ? (
                state.sortOrder === 'asc' ? (
                  <MaterialCommunityIcons
                    name="menu-down"
                    size={16}
                    color="#007bff"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="menu-up"
                    size={16}
                    color="#007bff"
                  />
                )
              ) : (
                <MaterialCommunityIcons
                  name="menu-down"
                  size={16}
                  color="#007bff"
                />
              )}
            </Text>
          </TouchableOpacity>
          <View
            style={{height: '100%', width: 2, backgroundColor: '#007bff'}}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch({type: 'SORT', payload: {key: 'bids'}})}>
            <Text style={styles.buttonText}>
              Bid
              {state.sortBy === 'bids' ? (
                state.sortOrder === 'asc' ? (
                  <MaterialCommunityIcons
                    name="menu-down"
                    size={24}
                    color="#007bff"
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="menu-up"
                    size={24}
                    color="#007bff"
                  />
                )
              ) : (
                <MaterialCommunityIcons
                  name="menu-down"
                  size={24}
                  color="#007bff"
                />
              )}
            </Text>
          </TouchableOpacity>
          <View
            style={{height: '100%', width: 2, backgroundColor: '#007bff'}}
          />
          <TouchableOpacity
            style={{...styles.button, marginRight: 4}}
            onPress={() => dispatch({type: 'TOGGLE_VIEW'})}>
            <Text style={{...styles.buttonText, padding: 0}}>
              {state.viewMode === 'normal' ? (
                <Entypo name="grid" size={28} color="#007bff" />
              ) : (
                <SimpleLineIcons name="list" size={28} color="#007bff" />
              )}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}

      {searchVisible && (
        <View>
          <TextInput
            style={{
              backgroundColor: 'white',
              padding: 16,
              margin: 16,
              marginTop: 8,
            }}
            placeholder="search"
            onChangeText={text =>
              dispatch({type: 'SET_SEARCH_QUERY', payload: text})
            }
          />
          <TouchableOpacity
            onPress={() => setSearchVisible(prev => !prev)}
            style={{position: 'absolute', right: 32, top: 20}}>
            <MaterialCommunityIcons size={30} name="close" />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={state.filteredItems}
        keyExtractor={(item, index) => `${item.LotNo}_${index}`}
        renderItem={({item}) => renderItem({item, navigation})}
        key={state.viewMode}
        numColumns={state.viewMode === 'list' ? 2 : 1}
        contentContainerStyle={styles.list}
        columnWrapperStyle={state.viewMode === 'list' && styles.rowWrapper}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 4,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '600',
    padding: 16,
  },
  list: {},
  rowWrapper: {
    justifyContent: 'space-between',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: 120,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },

  itemCompact: {
    flex: 1,
    marginBottom: 12,
    marginRight: 8,
    marginLeft: 8,
    backgroundColor: '#fff',
  },
  imageCompact: {
    width: '100%',
    height: 120,
    marginBottom: 12,
    alignSelf: 'center',
  },
  detailsCompact: {
    paddingLeft: 16,
    marginBottom: 20,
  },
  titleCompact: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
  },
  lotNoCompact: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  infoCompact: {
    fontSize: 14,
    color: '#666',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#ff4d4f',
  },
});

export default FilterComponent;
