import React, {useRef, useState} from 'react';
import {View, Text, ScrollView, Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

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

export const Carousel = () => {
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = screenWidth * 0.8; // Width of each card
  const cardMargin = screenWidth * 0.02; // Margin between cards
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
          paddingHorizontal: screenWidth * 0.1, // Center padding
        }}
        scrollEventThrottle={16}
        bounces={false}>
        {data.map((item, index) => (
          <View
            key={item.id}
            style={[styles.card, currentIndex === index && styles.activeCard]}>
            <Text style={styles.leagueTitle}>{item.title}</Text>
            <View style={styles.scoreRow}>
              <View style={styles.teamContainer}>
                <Text style={styles.team}>{item.team1}</Text>
              </View>
              <View style={styles.scoreContainer}>
                <Text style={styles.score}>{item.score}</Text>
                <Text style={styles.bowler}>{item.bowler}</Text>
              </View>
              <View style={styles.teamContainer}>
                <Text style={styles.team}>{item.team2}</Text>
              </View>
            </View>
            <View style={styles.liveBadge}>
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  card: {
    width: screenWidth * 0.8,
    marginHorizontal: screenWidth * 0.02,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
  },
  activeCard: {
    transform: [{scale: 1.05}],
    shadowColor: 'blue',
    shadowOpacity: 0.4,
  },
  leagueTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
  },
  team: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  scoreContainer: {
    flex: 2,
    alignItems: 'center',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  bowler: {
    fontSize: 12,
    color: '#555',
  },
  liveBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  liveText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});
