import {View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CustomCard} from '../components/CustomCard';

export const Home = () => {
  const navigation = useNavigation();
  const [selectTab, setSelectTab] = useState('Live');
  return (
    <View className="flex flex-1 justify-center items-center p-5">
      <View className="flex flex-row w-full h-12 bg-white rounded-lg">
        {['Live', 'Upcoming', 'Finised', 'Series']?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectTab(item)}
              key={index}
              style={{
                backgroundColor: selectTab == item ? '#048267' : '#ffff',
              }}
              className="flex flex-1 justify-center items-center rounded-xl">
              <Text style={{color: selectTab == item ? '#ffff' : '#000'}}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-5">
        {selectTab == 'Live' && <Text>{selectTab}</Text>}
        {selectTab == 'Upcoming' && (
          <>
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </>
        )}
        {selectTab == 'Finised' && <Text>{selectTab}</Text>}
        {selectTab == 'Series' && <Text>{selectTab}</Text>}
      </ScrollView>
    </View>
  );
};
