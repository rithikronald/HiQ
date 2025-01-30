import {View, Text} from 'react-native';
import React from 'react';

export const TopNavBar = () => {
  return (
    <View className="flex flex-row w-full h-12 bg-white rounded-lg">
      {['Live', 'Upcoming', 'Finised', 'Series']?.map((item, index) => {
        return (
          <View key={index} className="flex flex-1 justify-center items-center">
            <Text>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};
