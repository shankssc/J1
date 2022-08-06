import { View, Text, SafeAreaView } from 'react-native'
import React,{ useState } from 'react'
import { COLORS, assets } from '../constants'
import Authentication  from '../components/Auth/Authentication'
import { Avatar, Input, Button } from 'react-native-elements'

const Auth = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);

  
  return (
    <SafeAreaView style={{
      width: "100%",
      height: "100%",
      backgroundColor: COLORS.gts,
      
    }}>
    <View>
      <Authentication />

    </View>
    
    </SafeAreaView>
  )
}

export default Auth