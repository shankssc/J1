import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { Card, Avatar, Input, Button, Overlay } from 'react-native-elements'
import Styles from './Styles';
import { FONTS, SIZES, assets } from '../../constants';
import {Dropdown} from 'react-native-element-dropdown';
import { useFonts } from 'expo-font';
import { gql, useMutation } from '@apollo/client'
//import { useMutation } from '@apollo/react-hooks';
import { useForm, Controller } from 'react-hook-form'

import Home from '../../screens/Home';

const Authis = () => {
  
  const [fontsLoaded] = useFonts({
    'Rigatoni': require('../../assets/fonts/Rigatoni-ExtraBold.ttf'),
    'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
    'Andrea': require('../../assets/fonts/Andrea.ttf'),
    'Village-Stylish': require('../../assets/fonts/Village-Stylish.ttf')
  })

  const roles = [
    {label: 'Customer', value: 'CUSTOMER'},
    {label: 'Owner', value: 'BUSINESS_OWNER'},
    {label: 'Carrier', value: 'CARRIER'},
    {label: 'Admin', value: 'ADMINISTRATOR'},
  ]

  const [showPassword, setShowPassword] = useState(true);
  const [isSignup, setIsSignup] = useState(true);
  const [dropdown, setDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const toggleSwitch = () =>{
    setIsSignup(isSignup => !isSignup)
  }

  const handleChange = (event) => {
    setFormData(formData => ({ ...formData, [event.target.name]: event.target.value }))
  }

  const {control, handleSubmit, errors, reset, getValues} = useForm({
    defaultValues: {
      'username':"",
      'email':"",
      'password':"",
      'confirmPassword':""

    },mode:'onBlur'
  })

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result)
    },
    variables: {
      username: getValues("username"),
      email: getValues("email"),
      password: getValues("password"),
      role: dropdown
    }
  })

  const submit = (data) => {
    console.log(data)
    addUser()
    reset()
  }
  /*
  const handleSubmit = (e) => {
    e.preventDefault()
    addUser()
    navigate('/home')
  }*/
  
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
      
      <Card.Title style={{color: '#dc1846'}}>{isSignup?'Sign up': 'Sign in'}</Card.Title>
            
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
        <Controller 
        control={control}
        name="username"
        render={({field: {onChange, value, onBlur}}) => (
            <TextInput
                placeholder=' username'
                style={Styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                autoFocus half
            />
            )}
        />

        <Controller 
        control={control}
        name="email"
        render={({field: {onChange, value, onBlur}}) => (
            <TextInput
                placeholder=' email'
                style={Styles.input}
                value={value}
                onBlur={onBlur}
                keyboardType='email-address'
                onChangeText={(value) => onChange(value)}
                autoFocus half
            />
            )}
        />
      

      <Controller 
        control={control}
        name="password"
        render={({field:{onChange, value, onBlur}}) => (
            <TextInput
                placeholder=' password'
                style={Styles.input}
                value={value}
                onBlur={onBlur}
                secureTextEntry={showPassword}
                right={<TextInput.Icon name={showPassword ? "eye" : "eye-off"}
                onPress={() => setShowPassword(!showPassword)} />}
                onChangeText={(value) => onChange(value)}
                autoFocus half
            />
            )}
        />
      
      <Controller 
        control={control}
        name="confirmPassword"
        render={({field:{onChange, value, onBlur}}) => (
            <TextInput
                placeholder=' confirm password'
                style={Styles.input}
                value={value}
                type='password'
                onBlur={onBlur}
                secureTextEntry={showPassword}
                onChangeText={(value) => onChange(value)}
                autoFocus half
            />
            )}
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
        onPress={handleSubmit(submit)}
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
        <Controller 
        control={control}
        name="username"
        render={({field:{onChange, value, onBlur}}) => (
            <TextInput
                placeholder=' username'
                style={Styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                autoFocus half
            />
            )}
        />

        <Controller 
        control={control}
        name="password"
        render={({field:{onChange, value, onBlur}}) => (
            <TextInput
                placeholder=' password'
                style={Styles.input}
                value={value}
                type='password'
                onBlur={onBlur}
                secureTextEntry={showPassword}
                onChangeText={(value) => onChange(value)}
                autoFocus half
            />
            )}
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
        onPress={() => handleSubmit}
        />
      </View>

        </View>
      }

      </Card>
      
      </ScrollView>
    </SafeAreaView>
  )
}


const REGISTER_USER = gql`
  mutation signup(
    $username: String!
    $email: String!
    $password: String!
    $role: Role!
  )
  {
    signup(
      registerInput: {
        username: $username,
        email: $email,
        password: $password,
        role: $role
      }
    )
    {
      _id email username token
    }
  }
`


export default Authis