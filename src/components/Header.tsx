import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'nativewind';

export const Header = () => {
  return (
    <View className="flex flex-row h-24">
      <LinearGradient
        style={{
          flexDirection: 'row',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingHorizontal: 10,
          paddingBottom: 15,
        }}
        colors={['#048267', '#025947']}>
        <Text className="text-white font-extrabold text-lg italic">
          APP NAME LOGO
        </Text>
        <View className="flex flex-row gap-x-2">
          <View className="flex-row bg-white/30 p-2 rounded-full justify-center items-center">
            <Image
              className="h-5 w-5 aspect-square"
              source={require('../assets/user.png')}
            />
          </View>
          <View className="flex-row bg-white/30 p-2 rounded-full justify-center items-center">
            <Image
              className="h-5 w-5 aspect-square"
              source={require('../assets/notification.png')}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
