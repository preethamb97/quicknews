import { FlatList, Text, View } from 'react-native'
import React from 'react'
import CarouselItem from './CarouselItem';
import tw from 'tailwind-react-native-classnames';

const PageRenderer = ({ news, gallery }) => {
  return (
    <View style={tw`bg-white w-full`}>
      <View style={[tw`h-1/3 w-full`]}>
        <FlatList
          data={gallery}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment='center'
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />
          }}
        />
      </View>
      <View style={tw`h-full`}>
        <Text>{news.title}</Text>
        <Text>{news.description}</Text>
      </View>
    </View>
  )
}

export default PageRenderer;