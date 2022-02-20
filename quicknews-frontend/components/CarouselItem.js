import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
const { width } = Dimensions.get('window');
const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={[tw`rounded-xl`, styles.image]}
        source={{ url: item.url }}
      />
    </View>
  )
}

export default CarouselItem;

const styles = StyleSheet.create({
  cardView: {
    width: width,
    flex: 1,
    margin: 0.7,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: width
  }
})