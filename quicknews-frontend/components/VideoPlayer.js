import { Text, View } from 'react-native'
import React from 'react'

const VideoPlayer = ({ url }) => {
  return (
    <View>
      <Text>Video Url: {url}</Text>
    </View>
  )
}

export default VideoPlayer;