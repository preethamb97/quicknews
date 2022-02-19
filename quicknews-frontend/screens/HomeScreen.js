import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`h-1/3 bg-gray-300`}>
        <Image
          style={{
            width:300, height:300, resizeMode: 'contain'
          }}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/31663960?v=4'
          }}
        />
      </View>
      <View style={tw`h-full bg-gray-500`}>
        <Image
          style={{
            width:700, height:400, resizeMode: 'contain'
          }}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/31663960?v=4'
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue"
  }
})