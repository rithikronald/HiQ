import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabNavigation} from './BottomTabNavigation';

export const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};
