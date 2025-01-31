import {View, Text, Image} from 'react-native';
import React from 'react';
import {TeamCard} from './TeamCard';
import {Badge} from './Badge';

export const CustomCard = () => {
  return (
    <View
      className="flex w-full border-2 mb-4 justify-between bg-white border-primary h-[160px] rounded-xl items-center
    ">
      <View className="bg-primary w-[80%] p-1 self-center rounded-b-xl items-center">
        <Text className="text-white font-semibold text-sm">
          KCC T 20 Challengers B League
        </Text>
      </View>
      <Text className="text-xs text-[#3A3A3A]">
        Monday 23, T10, Surrey royals Vs Middlesex Titans
      </Text>
      <View className="flex flex-row justify-around w-full">
        <TeamCard
          url={require('../assets/India_national_cricket_team.png')}
          teamName="IND"
          orientation="right"
        />
        <View className="flex justify-center items-center">
          <Text className="text-xs text-[#5E5E5E]">Starts in</Text>
          <Text className="text-sm text-black font-extrabold">42h : 12m</Text>
          <Text className="text-xs font-[500] text-black">Monday, 30 Dec, 06:30 AM</Text>
        </View>
        <TeamCard
          url={require('../assets/england-logo.png')}
          teamName="ENG"
          orientation="left"
        />
      </View>
      <View className="flex flex-row bg-primary/10 w-full h-8 px-2 items-center justify-between">
        <Text className="text-sm font-bold text-black">Favourite:</Text>
        <View className="flex flex-row gap-x-2">
          <Badge color="white" text="SRO" />
          <Badge color="#048267" text="86" textColor="#ffff" />
          <Badge color="red" text="89" textColor="#fff" />
        </View>
      </View>
    </View>
  );
};
