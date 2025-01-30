import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../Screens/Home';
import {Series} from '../Screens/Series';
import {Reels} from '../Screens/Reels';
import {Images} from '../Screens/Images';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}): any => ({
        headerShown: false,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
        tabBarActiveTintColor: '#048267',
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let url;
          if (route.name === 'Home') {
            url = require('../assets/home.png');
          } else if (route.name === 'Series') {
            url = require('../assets/trophy.png');
          } else if (route.name === 'Reels') {
            url = require('../assets/reel.png');
          } else if (route.name === 'Images') {
            url = require('../assets/image.png');
          }
          return <Image className="w-6 h-6" source={url} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Series" component={Series} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Images" component={Images} />
    </Tab.Navigator>
  );
};
