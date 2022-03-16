import { Text, View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';

const { height, width } = Dimensions.get("window");
console.log(height, width)
const VideoPlayer = ({ videoId }) => {
  console.log(videoId)
  return (
    <View style={styles.cardView}>
 <YoutubePlayer
        height={height}
        width={width}
        play={false}
        videoId={videoId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    width: width,
    height: height,
    flex: 1,
    alignItems: 'center', 
    marginTop: 35
  },
  player: {
    flex: 1,
    resizeMode: 'contain',
    width: width,
  }
});

export default VideoPlayer;