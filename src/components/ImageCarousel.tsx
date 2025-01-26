import React, {useRef, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TeamCard} from './TeamCard';
const screenWidth = Dimensions.get('window').width;
const data = [
  {
    id: '1',
    title: 'International League T20',
    score: '30/0 (4)',
    bowler: 'ADKR to Bowl',
    team1: 'IND',
    team2: 'ENG',
  },
  {
    id: '2',
    title: 'International League T20',
    score: '50/2 (6)',
    bowler: 'XYZ to Bowl',
    team1: 'AUS',
    team2: 'NZ',
  },
  {
    id: '3',
    title: 'International League T20',
    score: '75/3 (10)',
    bowler: 'PQR to Bowl',
    team1: 'PAK',
    team2: 'SL',
  },
];

export const ImageCarousel = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = screenWidth * 0.85; // Width of each card
  const cardMargin = screenWidth * 0.03; // Margin between cards
  const snapToPosition = cardWidth + cardMargin * 2; // Total card width with margins

  const handleScrollEndDrag = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / snapToPosition);
    setCurrentIndex(newIndex);

    // Snap to the nearest card
    scrollViewRef.current?.scrollTo({
      x: newIndex * snapToPosition,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={handleScrollEndDrag}
        contentContainerStyle={{
          paddingHorizontal: screenWidth * 0.04, // Center padding
        }}
        scrollEventThrottle={16}
        bounces={false}>
        {data.map((item, index) => (
          <View
            style={[styles.card, currentIndex === index && styles.activeCard]}>
            <ImageBackground
              key={item.id}
              source={require('../assets/carousel.png')}
              style={{width: '100%', height: '100%'}}>
              <View className="flex flex-1 p-3">
                <View className="flex flex-row justify-between">
                  <Text className="text-white font-bold">
                    International League T20
                  </Text>
                  <View className="bg-[#FF0000] w-[60px] rounded-md justify-center items-center">
                    <Text className="text-white">Live</Text>
                  </View>
                </View>
                <View className="flex flex-row justify-around w-full flex-1">
                  <TeamCard
                    url={require('../assets/India_national_cricket_team.png')}
                    teamName="IND"
                    textColor="#fff"
                  />
                  <View className="flex justify-center items-center">
                    <Text className="text-sm font-extrabold text-white">
                      30/0 (4)
                    </Text>
                    <Text className="text-xs text-white">ADKR to Bowl</Text>
                  </View>
                  <TeamCard
                    url={require('../assets/england-logo.png')}
                    teamName="ENG"
                    textColor="#fff"
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    width: screenWidth * 0.85,
    marginHorizontal: screenWidth * 0.03,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  activeCard: {
    transform: [{scale: 1.05}],
    shadowColor: 'blue',
    shadowOpacity: 0.4,
  },
});

// const ImageCarousel = () => {
//     return (
//       <ScrollView
//         horizontal
//         pagingEnabled
//         scrollEventThrottle={16}
//         showsHorizontalScrollIndicator={false}>
//         {[...new Array(3).keys()].map((item, index) => {
//           return (
//             <ImageBackground
//               key={index}
//               style={{
//                 width: width - width / 10,
//                 height: 100,
//                 padding: 8,
//                 marginHorizontal: 5,
//               }}
//               source={require('../assets/carousel.png')}>
//               <View className="flex flex-row justify-between">
//                 <Text className="text-white font-bold">
//                   International League T20
//                 </Text>
//                 <View className="bg-red-500 w-24 rounded-md justify-center items-center">
//                   <Text className="text-white">Live</Text>
//                 </View>
//               </View>
//               <View className="flex flex-row justify-around w-full flex-1">
//                 <TeamCard
//                   url={require('../assets/India_national_cricket_team.png')}
//                   teamName="IND"
//                   textColor="#fff"
//                 />
//                 <View className="flex justify-center items-center">
//                   <Text className="text-sm font-extrabold text-white">
//                     30/0 (4)
//                   </Text>
//                   <Text className="text-xs text-white">ADKR to Bowl</Text>
//                 </View>
//                 <TeamCard
//                   url={require('../assets/england-logo.png')}
//                   teamName="ENG"
//                   textColor="#fff"
//                 />
//               </View>
//             </ImageBackground>
//           );
//         })}
//       </ScrollView>
//     );
//   };
