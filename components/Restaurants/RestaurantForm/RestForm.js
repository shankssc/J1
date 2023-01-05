import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { Card, Button, Overlay  } from 'react-native-elements'
import { FONTS, SIZES, assets } from '../../../constants'
import { useNavigate } from "react-router-dom"
import { useFonts } from 'expo-font';
import FileBase from 'react-file-base64';

import Styles from './Styles'

const RestForm = ({Rest}) => {

    const [fontsLoaded] = useFonts({
        'Rigatoni': require('../../../assets/fonts/Rigatoni-ExtraBold.ttf'),
        'Inter-Regular': require('../../../assets/fonts/Inter-Regular.ttf'),
        'Timberline': require('../../../assets/fonts/Timberline.ttf'),
        'Santaria': require('../../../assets/fonts/Santaria.ttf'),
        'Andrea': require('../../../assets/fonts/Andrea.ttf'),
        'Celery-Smile': require('../../../assets/fonts/Celery-Smile.ttf'),
        'Village-Stylish': require('../../../assets/fonts/Village-Stylish.ttf'),
        'Handbreak': require('../../../assets/fonts/Handbreak-MVjrn.ttf'),
      })

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={Styles.container}>
                <Card containerStyle={Styles.cardContainer}>
                    <Card.Title h3 style={{fontFamily: 'Rigatoni', color: '#dc1846'}}>Create a Restaurant</Card.Title>

                    <View>
                        <TextInput
                        placeholder=' Restaurant name'
                        style={Styles.input}
                        onChangeText={() => { }}
                        />

                        <TextInput
                        placeholder=' Street address'
                        style={Styles.input}
                        onChangeText={() => { }}
                        />

                        <TextInput
                        placeholder=' Phone'
                        style={Styles.input}
                        onChangeText={() => { }}
                        />

                        <View style={{alignSelf:'flex-start', marginTop: 15, marginBottom: 15}}>
                        <FileBase 
                        
                        type="file"
                        multiple={false}
                        onDone={() => {}}/>
                        </View>

                        
                        <Button 
                        title="Create" 
                        type="solid" 
                        titleStyle={{ fontWeight: '600', fontFamily: 'Inter-Regular' }}
                        buttonStyle={{
                        backgroundColor: "rgba(199, 43, 98, 1)",
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 15,
                        }}
                        containerStyle={{
                        width: 80,
                        marginTop: 20,
                        alignSelf: 'center'
                        }}
                        onPress={() => {}}
                        />
                        
                    </View>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RestForm