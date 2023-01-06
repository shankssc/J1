import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { COLORS } from '../constants'
import Navbar from '../components/Navbar/Navbar'


const Home = () => {
  return (
    <SafeAreaView style={{
      width: "100%",
      height: "100%",
      backgroundColor: COLORS.abc,
    }}>
      <View style={{flex:1}}>
      </View>
      <View>
        <Navbar />
      </View>
      
    </SafeAreaView>
  )
}

export default Home