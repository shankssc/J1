import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { Card, Avatar, Input, Button, Overlay  } from 'react-native-elements'
import Styles from './Styles';
import { FONTS, SIZES, assets } from '../../constants';
import {Dropdown} from 'react-native-element-dropdown';

import Home from '../../screens/Home';

const Authentication = () => {

  const roles = [
    {label: 'Customer', value: '1'},
    {label: 'Business owner', value: '2'},
    {label: 'Carrier', value: '3'},
    {label: 'Administrator', value: '4'},
  ]

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);

  const toggleSwitch = () =>{
    setIsSignup(isSignup => !isSignup)
  }

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={Styles.container}>
        <Image
          style={
            Styles.image
          }
          source={assets.kotaco}
        />

      
      <Card containerStyle={{
        borderRadius: "20px",
        overflow: "hidden"
      }}>
      
      <Card.Title>{isSignup?'Sign up': 'Sign in'}</Card.Title>
            
      <View style={{
        marginLeft: "250px",
        overflow: "hidden"
      }}>
      <Switch
      
      onValueChange={toggleSwitch}
      value={isSignup}
      />
      </View>

      {
        isSignup ?
        <View>
          <TextInput
        placeholder=' username'
        style={Styles.input}
        onChangeText={() => { }}
      />

      
      <TextInput
        placeholder=' email'
        style={Styles.input}
        onChangeText={() => { }}
      />
      

      <TextInput
        placeholder=' password'
        style={Styles.input}
        onChangeText={() => { }}
      />
      
      <TextInput
        placeholder=' confirm password'
        style={Styles.input}
        onChangeText={() => { }}
      />
      

      <View style={{flexDirection:"row", marginTop: 10, marginBottom: 10}}>
      
      <Button 
        title="Sign up" 
        type="solid" 
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: "rgba(199, 43, 98, 1)",
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
        }}
        containerStyle={{
          width: 100,
          marginRight: 50
        }}
        onPress={() => navigation.navigate('Home')}
        />

      <Dropdown 
      style={Styles.dropdown}
      data={roles}
      labelField="label"
      valueField="value"
      placeholder="Select a role"
      value={dropdown}
      onChange={item => setDropdown(item.value)}
      />
      </View>
        </View>

          :

      <View>
        <TextInput
        placeholder=' username'
        style={Styles.input}
        onChangeText={() => { }}
      />

      <TextInput
        placeholder=' password'
        style={Styles.input}
        onChangeText={() => { }}
      />
      
      <View style={{flexDirection:"row", marginTop: 10, marginBottom: 10}}>
      
      <Button 
        title="Sign in" 
        type="solid" 
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
          backgroundColor: "rgba(199, 43, 98, 1)",
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
          
        }}
        containerStyle={{
          width: 100,
          marginRight: 50,
          
        }}
        onPress={() => navigation.navigate('Home')}
        />
      </View>

        </View>
      }

      </Card>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Authentication