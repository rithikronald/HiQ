import {View, Text, Image} from 'react-native';
import React from 'react';

interface TeamCardProps {
  url: any;
  teamName: string;
}

export const TeamCard = ({url, teamName}: TeamCardProps) => {
  return (
    <View className="flex flex-row items-center">
      <Image className="w-10 h-10 rounded-full" source={url} />
      <Text className="text-xl font-bold ml-2">{teamName}</Text>
    </View>
  );
};
