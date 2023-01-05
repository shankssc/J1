import { View, Text, SafeAreaView } from 'react-native'
import React,{ useState } from 'react'
import { COLORS, assets } from '../constants'

import RestForm from '../components/Restaurants/RestaurantForm/RestForm'

const CreateRest = () => {
    return (
    <SafeAreaView style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.abc,
        
      }}>
        
      <View>
        <RestForm/>
      </View>

    </SafeAreaView>
    )
}

export default CreateRest