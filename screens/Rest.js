import { View, Text, SafeAreaView } from 'react-native'
import React,{ useState } from 'react'
import { COLORS, assets } from '../constants'

import Restaurant from '../components/Restaurants/Restaurant/Restaurant'

const Rest = () => {
    return (
    <SafeAreaView style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.gts,
        
      }}>
        
      <View>
        <Restaurant />
      </View>

    </SafeAreaView>
    )
}

export default Rest