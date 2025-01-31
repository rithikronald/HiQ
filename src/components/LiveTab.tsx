import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {CustomCard} from './CustomCard';

export const LiveTab = () => {
  return (
    <ScrollView>
      <CustomCard />
      <CustomCard />
      <View className="flex flex-row gap-x-3">
        <TouchableOpacity className="flex flex-1 justify-center items-center h-12 flex-row bg-white border border-primary rounded-xl">
          <Image className="w-6 h-6" source={require('../assets/series.png')} />
          <Text className="text-black font-semibold text-sm ml-4">Series</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-1 justify-center items-center h-12 flex-row bg-white border border-primary rounded-xl">
          <Image className="w-6 h-6" source={require('../assets/allStats.png')} />
          <Text className="text-black font-semibold text-sm ml-4">
            All Stats
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
