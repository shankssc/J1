import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { Card, Avatar, Input, Button, Overlay } from 'react-native-elements'
import Styles from './Styles';
import { FONTS, SIZES, assets } from '../../constants';
import {Dropdown} from 'react-native-element-dropdown';

const Authentication = () => {

  const roles = [
    {label: 'Customer', value: '1'},
    {label: 'Business owner', value: '2'},
    {label: 'Carrier', value: '3'},
    {label: 'Administrator', value: '4'},
  ]

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
      
      <Card.Title>Sign up</Card.Title>

      <TextInput
        placeholder=' userame'
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

      <Dropdown 
      data={roles}
      labelField="label"
      valueField="value"
      />
      </Card>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Authentication