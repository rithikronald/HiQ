import React from 'react';
import {Image, Text, View} from 'react-native';

const NewsCard = () => {
  return (
    <View className="w-full rounded-3xl p-4 bg-white mb-6">
      <Image
        className="rounded-2xl w-full"
        source={require('../assets/teamIndia.png')}
      />
      <View className="flex mt-4 p-2">
        <Text className="text-black font-bold text-lg">
          Some big players have missed out on the CT 2025 squad.
        </Text>
        <Text className="text-[#3A3A3A] mt-4 ">
          Monday 23, T10, Surrey royals Vs Middlesex Titans
        </Text>
        <Text className="text-[#3A3A3A] mt-4 ">
          India’s captain and vice-captain have changed from 2024 to 2025.
        </Text>
        <Text className="text-[#3A3A3A] mt-4 ">
          Axar Patel is vice-captain for the England T20Is, while Shubman Gill
          will assist Rohit Sharma in the Champions Trophy.
        </Text>
      </View>
    </View>
  );
};

export default NewsCard;
