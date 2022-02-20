import { Dimensions, Image, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');

const CarouselItem = ({ item }) => {
  return (
    <ImageBackground source={{ url: item.url }} style={[styles.cardView]} blurRadius={20}>
      <Image style={styles.image}
        source={{ url: item.url }}
      />
    </ImageBackground>
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
    resizeMode: 'contain',
    width: width,
  }
})