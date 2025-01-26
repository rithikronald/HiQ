import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomCard} from '../components/CustomCard';

export const Home = () => {
  const navigation = useNavigation();
  const [selectTab, setSelectTab] = useState('Live');
  return (
    <View className="flex flex-1 p-5">
      <View className="rounded-2xl overflow-hidden">
        <ImageBackground
          style={{width: '100%', height: 120}}
          source={require('../assets/carousel.png')}></ImageBackground>
      </View>
      <View className="flex flex-row w-full h-12 bg-white rounded-lg mt-2">
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
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
  },
});
