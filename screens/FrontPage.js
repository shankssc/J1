import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, assets } from '../constants'
import { Button } from 'react-native-elements'
import { useLocation,useNavigate } from 'react-router-dom'

const FrontPage = ({ navigation, route }) => {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()

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
      <Button 
        title="Get Started" 
        type="solid" 
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: "rgba(199, 43, 98, 1)",
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 150,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        //onPress={() => navigation.navigate('/auth')}
        onPress={()=>navigate('/auth')}
        />
        
      </View>
      </View>
    </SafeAreaView>
  )
}

export default FrontPage