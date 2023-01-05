import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { Card, Button, Overlay  } from 'react-native-elements'
import { FONTS, SIZES, assets } from '../../../constants'
import { useNavigate } from "react-router-dom"

import Styles from './Styles'

const Restaurant = ({rest}) => {

    //const nav = useNavigate()
    
    //const openPost = () => {
    //    nav.push(`/restaurants/${rest._id}`);
    //}
    

    /*
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={Styles.container}>
                <Card containerStyle={Styles.cardContainer}>
                    <Card.Image 
                        source={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                        style={{flex:1, width: undefined, height: undefined}}
                        resizeMode='cover'
                    />
                    <Card.Divider />
                    <Card.Title>'Restaurant name'</Card.Title>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
    */
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={Styles.container}>
                <Card containerStyle={Styles.cardContainer}>
                <Card.Image 
                        source={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
                        //style={{flex:1, width: undefined, height: undefined}}
                        resizeMode='cover'
                    />
                <Card.Title>'Restaurant name'</Card.Title>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Restaurant