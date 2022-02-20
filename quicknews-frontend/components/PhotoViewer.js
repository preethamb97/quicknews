import { Text, View } from 'react-native'
import React from 'react'

const PhotoViewer = ({ url }) => {
  return (
    <View>
      <Text>Image Url: {url}</Text>
    </View>
  )
}

export default PhotoViewer;