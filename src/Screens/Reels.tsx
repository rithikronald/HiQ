import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import ReelsScreen from '../components/ReelsScreen';

const {height, width} = Dimensions.get('window');
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

export const Reels = () => {
  return (
    <View className='flex flex-1'> 
      <ReelsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, height, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});
