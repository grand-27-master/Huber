import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image style={{width:100, height:100, resizeMode:'contain'}} source={require('../assets/logo.png')}/>
        <Navbar/>
      </View>
    </SafeAreaView>
  )
}

export default Home

// const styles = StyleSheet.create({
//     Text: {
//         fontSize: 20,
//         color: 'blue',
//     },
// })