import {View, Text} from 'react-native';
import React from 'react';

interface BadgeProps {
  color: string;
  text: string;
  textColor?: string;
}

export const Badge = ({color, text, textColor}: BadgeProps) => {
  return (
    <View
      style={{backgroundColor: color}}
      className="rounded-[4px] w-11 justify-center items-center">
      <Text
        style={{color: textColor ? textColor : '#000'}}
        className="text-xs font-[500]">
        {text}
      </Text>
    </View>
  );
};
