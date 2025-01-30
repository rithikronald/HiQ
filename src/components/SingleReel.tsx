import React, {useEffect, useRef} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video';

const {height, width} = Dimensions.get('window');

export const SingleReel = ({item, index, currentIndex}) => {
  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffering', buffer);
  };

  const onError = error => {
    console.log('Error', error);
  };

  useEffect(() => {
    console.log('ITEM', item);
  }, [item]);

  return (
    <View style={{width: width, height: height,position:"relative"}}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          ref={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.post.url}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
