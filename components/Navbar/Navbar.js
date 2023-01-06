import { View, Text, SafeAreaView, TextInput, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../constants'
import Styles from './Styles'

const Navbar = () => {
    return (
        <SafeAreaView>
            <View style={Styles.NavContainer}>
                <View style={Styles.NavBar}>
                    <Pressable style={Styles.Icons} onPress={()=>{}}>
                        <Icon name="home" size={26} color='#fe8aa5'/>
                    </Pressable>

                    <Pressable style={Styles.Icons} onPress={()=>{}}>
                        <Icon1 name="text-box-search" size={26} color='#fe8aa5'/>
                    </Pressable>

                    <Pressable style={Styles.Icons} onPress={()=>{}}>
                        <Icon name="shoppingcart" size={26} color='#fe8aa5'/>
                    </Pressable>

                    <Pressable style={Styles.Icons} onPress={()=>{}}>
                        <Icon1 name="receipt" size={26} color='#fe8aa5'/>
                    </Pressable>

                    <Pressable style={Styles.Icons} onPress={()=>{}}>
                        <Icon1 name="account-box" size={26} color='#fe8aa5'/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Navbar