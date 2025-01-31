import React, {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntIcons from 'react-native-vector-icons/AntDesign';
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons';
import {CountrySelectionCard} from '../components/CountrySelectionCard';
import {CustomCard} from '../components/CustomCard';
import {ImageCarousel} from '../components/ImageCarousel';
import {LiveTab} from '../components/LiveTab';

export const Home = () => {
  const [selectTab, setSelectTab] = useState('Live');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex flex-1  pt-3 bg-primary/10">
      <View className="flex h-[110px]">
        <ImageCarousel />
      </View>
      <View className="flex flex-1 px-5 mt-4 mb-2">
        <View className="flex flex-row justify-between">
          <View
            style={{
              elevation: 8,
            }}
            className="flex flex-row w-[89%] h-10 bg-white rounded-xl border-b-primary border-b-[1px]">
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
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={1}
            className="flex w-10 h-10 justify-center items-center  bg-white rounded-xl border-b-primary border-b-[1px] border-r-[1px] ">
            <Image
              className="w-6 h-6"
              source={require('../assets/filter.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-5"
          contentContainerStyle={styles.containerStyle}>
          {selectTab === 'Live' && <LiveTab />}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 justify-center items-center bg-black/70 p-8">
          <View className="flex w-full items-end">
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image
                className="w-6 h-5"
                resizeMode="contain"
                source={require('../assets/x.png')}
              />
            </TouchableOpacity>
          </View>
          <View className="flex rounded-3xl p-5 bg-white h-[45%] w-full mt-4">
            <View className="flex flex-row w-full justify-between items-center">
              <Text className="text-xl text-black font-semibold">Filter</Text>
              <AntIcons name="search1" size={25} color="black" />
            </View>
            <View>
              <Text className="text-secondaryText text-xs">Select Country</Text>
              <ScrollView horizontal>
                <CountrySelectionCard />
                <CountrySelectionCard />
                <CountrySelectionCard />
                <CountrySelectionCard />
              </ScrollView>
            </View>
            <View>
              <Text className="text-secondaryText text-xs">Select Date</Text>
              <ScrollView horizontal>
                <CountrySelectionCard />
                <CountrySelectionCard />
                <CountrySelectionCard />
                <CountrySelectionCard />
              </ScrollView>
            </View>
            <View className="mt-4">
              <Text className="text-secondaryText text-xs">Select Date</Text>
              <View className="flex flex-row justify-between">
                <TouchableOpacity className="flex flex-row h-16 w-[48%]  justify-center items-center rounded-xl border border-primary">
                  <SimpleIcons color={'#000'} size={30} name="user" />
                  <Text className=" w-[40%] ml-3 text-sm font-semibold">Men’s Ranking</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row h-16 w-[48%] justify-center items-center rounded-xl border border-primary">
                  <SimpleIcons color={'#000'} size={30} name="user-female" />
                  <Text>Men’s Ranking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
  },
});
