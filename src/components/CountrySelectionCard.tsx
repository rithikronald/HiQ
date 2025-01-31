import React from 'react';
import { Image, Text, View } from 'react-native';

export const CountrySelectionCard = () => {
  return (
    <View className="flex flex-row border justify-center items-center w-16 h-8 border-primary rounded-lg mt-2 mr-2">
      <Image className="w-4 h-4" source={require('../assets/flag.png')} />
      <Text className="font-semibold text-black ml-1 text-sm">IND</Text>
    </View>
  );
};
