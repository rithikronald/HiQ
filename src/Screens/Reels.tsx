import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

export const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handleCurrentIndex = ({index}) => {
    setCurrentIndex(index);
  };

  return (
    <View className="flex flex-1 justify-center items-center bg-primary/10">
      {/* <SwiperFlatList
        data={data}
        vertical={true}
        onChangeIndex={handleCurrentIndex}
        renderItem={({item, index}) => (
          <SingleReel item={item} index={index} currentIndex={currentIndex} />
        )}
        keyExtractor={item => item.id}
      /> */}
      <Video
        ref={videoRef}
        // onBuffer={onBuffer}
        // onError={onError}
        repeat={true}
        resizeMode="cover"
        paused={false}
        source={require("../assets/Assets/video1.mov")}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        controls
      />
    </View>
  );
};
