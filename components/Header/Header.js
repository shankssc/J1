
import React from 'react'
import { Header as HeaderC } from "react-native-elements"
import { View, SafeAreaView, FlatList, Text, Linking,TouchableOpacity } from 'react-native';
import styles from './styles'

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <HeaderC 
          leftComponent={{
            icon: 'menu',
            color: '#fff',
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Header;