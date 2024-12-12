// navigation/config/routes.js
import CarouselScreen from '../../screens/CarouselScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import CustomTabNavigator from '../components/CustomTabNavigator';
import InfoCardDetail from '../../screens/InfoCardDetail';
import ProfileDetailScreen from '../../screens/ProfileDetailScreen';
import MyAccountScreen from '../../screens/MyAccountScreen';
import MyBidScreen from '../../screens/MyBidScreen';
import MyWatchingScreen from '../../screens/MyWatchingScreen';
import Specifications from '../../screens/Specifications';
import TermAndConditions from '../../screens/TermAndConditions';

// Tab Routes
export const tabRoutes = [
  {
    name: 'Home',
    component: HomeScreen,
    iconName: 'home',
    options: {tabBarLabel: 'Home'},
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    iconName: 'person',
    options: {tabBarLabel: 'Profile'},
  },
];

// Stack Routes
const stackRoutes = [
  {name: 'Carousel', component: CarouselScreen, options: {headerShown: false}},
  {name: 'Login', component: LoginScreen, options: {headerShown: false}},
  {name: 'SignUp', component: SignUpScreen, options: {headerShown: false}},
  {
    name: 'Tabs',
    component: () => <CustomTabNavigator routes={tabRoutes} />,
    options: {headerShown: false},
  },
  {
    name: 'Home',
    component: HomeScreen,
    iconName: 'home',
    options: {headerShown: false},
  },
  {
    name: 'InfoDetails',
    component: InfoCardDetail,
    options: {headerShown: false},
  },
  {
    name: 'ProfileDetails',
    component: ProfileDetailScreen,
    options: {headerShown: false},
  },
  {
    name: 'MyAccount',
    component: MyAccountScreen,
    options: {headerShown: false},
  },
  {
    name: 'MyBids',
    component: MyBidScreen,
    options: {headerShown: false},
  },
  {
    name: 'MyWatching',
    component: MyWatchingScreen,
    options: {headerShown: false},
  },
  {
    name: 'Specifications',
    component: Specifications,
    options: {headerShown: false},
  },
  {
    name: 'TermAndConditions',
    component: TermAndConditions,
    options: {headerShown: false},
  },
];

export default stackRoutes;
