import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { COLORS } from '../constants'
import Header from '../components/Header/Header'


const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  )
}

export default Home