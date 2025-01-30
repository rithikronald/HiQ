import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomCard} from '../components/CustomCard';
import {ImageCarousel} from '../components/ImageCarousel';

export const Home = () => {
  const [selectTab, setSelectTab] = useState('Live');
  return (
    <View className="flex flex-1  pt-3 bg-primary/10">
      <View className="flex h-[110px]">
        <ImageCarousel />
        {/* <Carousel /> */}
      </View>
      <View className="flex flex-1 px-5 mt-4 mb-2">
        <View
          style={{
            elevation: 8,
          }}
          className="flex flex-row w-full h-11 bg-white rounded-xl border-b-primary border-b-[1px]">
          {['Live', 'Upcoming', 'Finished', 'Series']?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectTab(item)}
                key={index}
                style={{
                  backgroundColor: selectTab == item ? '#048267' : '#ffff',
                }}
                className="flex flex-1 justify-center items-center rounded-xl font-bold">
                <Text
                  className="font-[600]"
                  style={{color: selectTab == item ? '#ffff' : '#000'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-5"
          contentContainerStyle={styles.containerStyle}>
          {selectTab === 'Live' && (
            <Text className="text-black">{selectTab}</Text>
          )}
          {selectTab === 'Upcoming' && (
            <>
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </>
          )}
          {selectTab === 'Finised' && (
            <Text className="text-black">{selectTab}</Text>
          )}
          {selectTab === 'Series' && (
            <Text className="text-black">{selectTab}</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
  },
});
