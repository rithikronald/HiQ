import {View, Text, Image} from 'react-native';
import React from 'react';

interface TeamCardProps {
  url: any;
  teamName: string;
  textColor?: string;
  orientation: string;
}

export const TeamCard = ({
  url,
  teamName,
  textColor,
  orientation,
}: TeamCardProps) => {
  return (
    <>
      {orientation === 'right' && (
        <View className="flex flex-row items-center">
          <Image className="w-10 h-10 rounded-full" source={url} />
          <Text
            style={{color: textColor ? textColor : '#000'}}
            className="text-xl font-[600] ml-2">
            {teamName}
          </Text>
        </View>
      )}
      {orientation === 'left' && (
        <View className="flex flex-row items-center">
          <Text
            style={{color: textColor ? textColor : '#000'}}
            className="text-xl font-[600] mr-2">
            {teamName}
          </Text>
          <Image className="w-10 h-10 rounded-full" source={url} />
        </View>
      )}
      {orientation === 'bottom' && (
        <View className="flex flex-col items-center justify-center">
          <Image className="w-8 h-8 rounded-full" source={url} />
          <Text
            style={{color: textColor ? textColor : '#000'}}
            className="text-lg font-semibold">
            {teamName}
          </Text>
        </View>
      )}
    </>
  );
};
