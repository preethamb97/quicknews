import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width:50, height:50, resizeMode: 'contain'
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