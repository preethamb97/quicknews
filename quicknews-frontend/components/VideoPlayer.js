import { Text, View } from 'react-native'
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoPlayer = ({ videoId }) => {
  return (
    <YoutubePlayer
      height={300}
      width={300}
      play={false}
      videoId={videoId}
    />
  )
}

export default VideoPlayer;