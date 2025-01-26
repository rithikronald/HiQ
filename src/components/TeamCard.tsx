import {View, Text, Image} from 'react-native';
import React from 'react';

interface TeamCardProps {
  url: any;
  teamName: string;
  textColor?: string;
}

export const TeamCard = ({url, teamName, textColor}: TeamCardProps) => {
  return (
    <View className="flex flex-row items-center">
      <Image className="w-10 h-10 rounded-full" source={url} />
      <Text
        style={{color: textColor ? textColor : '#000'}}
        className="text-xl font-bold ml-2">
        {teamName}
      </Text>
    </View>
  );
};
