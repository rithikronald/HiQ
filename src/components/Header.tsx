import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export const Header = () => {
  return (
    <View className="flex flex-row h-20">
      <LinearGradient
        style={styles.backgroundStyle}
        colors={['#048267', '#025947']}>
        <Text className="text-white font-extrabold text-xl italic">
          APP NAME LOGO
        </Text>
        <View className="flex flex-row gap-x-2">
          <View className="flex-row bg-white/30 p-2 rounded-full justify-center items-center overflow-hidden">
            <Image
              className="h-5 w-5"
              source={require('../assets/user1.png')}
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

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 14,
    paddingBottom: 15,
  },
});
