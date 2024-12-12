import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../../public/images/home.svg'; // Example SVG import
import HelpIcon from '../../../public/images/profile.svg'; // Example SVG import

const Tab = createBottomTabNavigator();

const CustomTabNavigator = ({routes}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const {iconName} = routes.find(r => r.name === route.name) || {};
          const IconComponent = iconName === 'home' ? HomeIcon : HelpIcon; // Map route to SVG icon
          return (
            <IconComponent
              width={size}
              height={size}
              fill={focused ? '#007BFF' : 'gray'}
            />
          );
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {height: 60},
      })}>
      {routes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default CustomTabNavigator;