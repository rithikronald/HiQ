import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcons from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';
import { FontAwesome } from '@expo/vector-icons';


const {height, width} = Dimensions.get('window');
const HEADER_HEIGHT = 80; // Approximate header height
const BOTTOM_TAB_HEIGHT = 80; // Approximate bottom tab ̦height
const VIDEO_HEIGHT = height - HEADER_HEIGHT - BOTTOM_TAB_HEIGHT; // Video space

const videos = [
  {id: '1', url: 'https://www.w3schools.com/html/mov_bbb.mp4'},
  {id: '2', url: 'https://www.w3schools.com/html/movie.mp4'},
  {id: '3', url: 'https://www.w3schools.com/html/mov_bbb.mp4'},
];

const ReelsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<Video[]>([]);
  const flatListRef = useRef<FlatList<any>>(null);

  // Track visible items to control autoplay
  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 80, // Video plays when 80% visible
  }).current;

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Header Placeholder */}
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Reels</Text>
      </View> */}

      {/* Video List */}
      <FlatList
        ref={flatListRef}
        data={videos}
        keyExtractor={item => item.id}
        pagingEnabled
        horizontal={false}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={VIDEO_HEIGHT} // Adjusted for available space
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        renderItem={({item, index}) => (
          <View style={styles.videoContainer}>
            <Video
              ref={ref => (videoRefs.current[index] = ref!)}
              source={{uri: item.url}}
              style={styles.video}
              resizeMode="cover"
              repeat
              muted={isMuted}
              paused={currentIndex !== index}
            />

            {/* Mute Button */}
            <TouchableOpacity
              style={styles.muteButton}
              onPress={() => setIsMuted(!isMuted)}>
              <Icon
                name={isMuted ? 'volume-off' : 'volume-up'}
                size={24}
                color="white"
              />
            </TouchableOpacity>

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.iconButton}>
                <AntIcons name="like1" size={30} color="white" />
                <Text style={styles.iconText}>12.3K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="comment" size={30} color="white" />
                <Text style={styles.iconText}>230</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="share" size={30} color="white" />
                <Text style={styles.iconText}>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Bottom Tab Placeholder */}
      {/* <View style={styles.bottomTab}>
        <Text style={styles.bottomTabText}>
          Home | Explore | Reels | Profile
        </Text>
      </View> */}
    </GestureHandlerRootView>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  videoContainer: {
    width,
    height: VIDEO_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  muteButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
  actionButtons: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    alignItems: 'center',
  },
  iconButton: {
    marginBottom: 20,
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  bottomTab: {
    height: BOTTOM_TAB_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  bottomTabText: {
    color: 'white',
    fontSize: 16,
  },
});
