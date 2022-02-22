import { FlatList, Linking, Text, View } from 'react-native'
import React from 'react'
import CarouselItem from './CarouselItem';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/AntDesign';

const PageRenderer = ({ id, news, gallery, reference }) => {
  const referenceUrl = reference.reference_url ? reference.reference_url : undefined;
  return (
    <View style={tw`bg-white w-full`}>
      <View style={[tw`h-1/3 w-full`]}>
        <Icon name='ellipsis1' size={25} color='white' style={{
          position: 'absolute',
          zIndex: 1,
          top: 6,
          right: 9
        }} />

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
      <View style={tw`h-full m-2 font-extrabold text-lg mt-3 tracking-tight`}>
        <Text
          style={tw`text-2xl`}
        >
          {news.title}
        </Text>

        <Text
          style={tw`text-lg mt-1 font-extralight tracking-normal leading-7`}
        >
          {news.description}
        </Text>

        {referenceUrl ? (
          <View>
            <Text onPress={() => {
              Linking.openURL(referenceUrl)
            }}
              style={{
                position: 'absolute',
                top: 6,
                color: '#8ab4f8'
              }}>{referenceUrl.replace('https://', '').replace('http://', '')}</Text>
          </View>
        ) : ''}
      </View>
    </View>
  )
}

export default PageRenderer;