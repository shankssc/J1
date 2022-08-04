import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLORS, assets } from '../constants'
import { Button } from 'react-native-elements'

const FrontPage = () => {
  return (
    <SafeAreaView style={{
      width: "100%",
      height: "100%",
      backgroundColor: COLORS.gts,
    }}> 
    <View style={{ 
      flex: 0.8,
      flexDirection: 'column',
      justifyContent: 'space-between' 
      }}>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
        }}>
      <Image 
        style={{
            resizeMode: "contain",
            height: 400,
            width: 500
        }}
        source={assets.outapp}
      />
      </View>
      
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
        }}>
      <Button type="solid">
      </Button>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default FrontPage