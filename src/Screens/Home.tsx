import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Carousel} from '../components/CarouselTrial';
import {CustomCard} from '../components/CustomCard';
import {ImageCarousel} from '../components/ImageCarousel';

export const Home = () => {
  const [selectTab, setSelectTab] = useState('Live');
  return (
    <View className="flex flex-1  pt-3 bg-primary/10">
      <View className="flex h-[120px]">
        <ImageCarousel />
        {/* <Carousel /> */}
      </View>
      <View className="flex flex-1 px-5 mt-4 mb-2">
        <View
          style={{
            elevation: 8,
          }}
          className="flex flex-row w-full h-12 bg-white rounded-xl">
          {['Live', 'Upcoming', 'Finised', 'Series']?.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectTab(item)}
                key={index}
                style={{
                  backgroundColor: selectTab == item ? '#048267' : '#ffff',
                }}
                className="flex flex-1 justify-center items-center rounded-xl font-bold">
                <Text style={{color: selectTab == item ? '#ffff' : '#000'}}>
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
          {selectTab === 'Live' && <Text>{selectTab}</Text>}
          {selectTab === 'Upcoming' && (
            <>
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
              <CustomCard />
            </>
          )}
          {selectTab === 'Finised' && <Text>{selectTab}</Text>}
          {selectTab === 'Series' && <Text>{selectTab}</Text>}
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
