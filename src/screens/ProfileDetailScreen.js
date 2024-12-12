import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import AddressCard from '../components/AddressCard';

const RowItem = ({iconName, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.newrowContainer} onPress={onPress}>
      <View style={styles.rowContent}>
        <Icon name={iconName} size={24} color="#007BFF" style={styles.icon} />
        <Text style={styles.rowText}>{text}</Text>
      </View>
      <Icon
        name="chevron-forward"
        size={24}
        color="#aaa"
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
};

const ProfileDetailScreen = ({navigation}) => {
  return (
    <View style={{...styles.container}}>
      <Header title="Profile" onBack={() => navigation.goBack()} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          {/* <View style={styles.profilePicture} /> */}
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg',
            }}
            style={styles.profilePicture}
          />
          <Text style={styles.profileName}>Rajnish Trikaldarshi</Text>
        </View>

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Link with UAE PASS</Text>
        </View>

        <Text style={styles.sectionTitle}>Personal Information</Text>

        {/* Row with Verify Button and Additional Contact */}
        <View style={styles.rowContainer}>
          {/* Verify Section */}
          <View style={[styles.infoRow, styles.verifySection]}>
            <Icon
              name="call"
              size={24}
              style={{alignSelf: 'top', marginTop: 10}}
            />
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Primary Number</Text>
              <Text style={styles.infoDetail}>+91 8789359890</Text>
              <TouchableOpacity style={styles.verifyButton}>
                <Text style={styles.verifyText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Additional Contact Section */}
          <View style={[styles.infoRow, styles.contactSection]}>
            <Icon name="add-circle" size={24} color="#007BFF" />
            <Text style={{...styles.infoDetail, textAlign: 'center'}}>
              Contact Number
            </Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          {/* Verify Section */}
          <View style={[styles.infoRow, styles.verifySection]}>
            <Icon
              name="mail"
              size={24}
              style={{alignSelf: 'top', marginTop: 10}}
            />
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Primary Email</Text>
              <Text style={styles.infoDetail}>hatsuae@hotmail.com</Text>
              <TouchableOpacity style={styles.verifyButton}>
                <Text style={styles.verifyText}>Verify</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Additional Contact Section */}
          <View style={[styles.infoRow, styles.contactSection]}>
            <Icon name="add-circle" size={24} color="#007BFF" />
            <Text style={{...styles.infoDetail, textAlign: 'center'}}>
              Email Address
            </Text>
          </View>
        </View>

        <View style={styles.addressHeader}>
          <Icon name="map-sharp" size={24} color="#007BFF" />
          <Text style={styles.sectionTitleWithIcon}>Address Information</Text>
        </View>

        <AddressCard
          iconName="location-outline"
          title="Home Address"
          description="Add addresses to choose one as the delivery location for your items."
          buttonText="Add Address"
          onPress={() => {}}
        />

        <View style={styles.addressHeader}>
          <Icon name="people-outline" size={24} color="#007BFF" />
          <Text style={styles.sectionTitleWithIcon}>Traffic Profiles</Text>
        </View>

        <AddressCard
          iconName="people-outline"
          title="Traffic Profiles"
          description="Add profiles to select one as the plate owner for delivery."
          buttonText="Add Traffic Profile"
          onPress={() => {}}
        />
        <Text style={{...styles.sectionTitle, marginBottom: 18}}>Settings</Text>
        <RowItem
          iconName="lock-closed-outline"
          text="Change Password"
          onPress={() => {}}
        />
        <View style={styles.divider} />
        <RowItem
          iconName="trash-outline"
          text="Delete my Account"
          onPress={() => {}}
        />
        <View style={{marginBottom: 50}} />
      </ScrollView>
    </View>
  );
};

export default ProfileDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#007BFF',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  linkContainer: {
    borderWidth: 1,
    borderColor: '#000',
    marginHorizontal: 28,
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
  },
  linkText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,
  },
  infoRow: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    // flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  infoContent: {
    flex: 1,
    marginLeft: 12,
  },
  infoTitle: {
    fontSize: 16,
    color: '#555',
  },
  infoDetail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verifyButton: {
    marginTop: 18,
    backgroundColor: '#007BFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  verifyText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  verifySection: {
    flex: 7.5,
    marginRight: 8,
    flexDirection: 'row',
  },
  contactSection: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitleWithIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  addressCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  newrowContainer: {
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
  arrow: {
    marginLeft: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
  },
});
