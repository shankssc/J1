import React, { useEffect, useState } from 'react';
import Styles from './Home.styles';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import Icon from '../../components/Icons';
import BottomNavigationComponent from '../../components/BottomNavigationMenu';
import { View,TouchableWithoutFeedback  } from 'react-native';
import globalStyle from '../../styles/globalStyle';
import { useDispatch,useSelector } from 'react-redux';
import * as Location from 'expo-location';
import {selectUser} from '../../reducers/user'
import DeliveryToggle from './DeliveryToggle';
import { GeoLocation } from '../Screens.types';


const Home = ({ navigation }: any): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const userStore = useSelector(selectUser);
  const [location, setLocation] = React.useState<GeoLocation>();
  const [address, setAddress] = React.useState();
  console.log("User store home", userStore)
  
  useEffect(() => {
    const getPermissionsAndReverseGeoCode = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log("Please grant location permissions");
          return;
        }
  
        let currentLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = currentLocation.coords;
        //@ts-ignore
        setLocation({ latitude, longitude });
        console.log("Location:", currentLocation);
  
        const reverseGeocodeAddress = await Location.reverseGeocodeAsync({ latitude, longitude });
        console.log("Reverse geocode:", reverseGeocodeAddress);
      } catch (error) {
        console.error("Error fetching location or reverse geocode:", error);
      }
    };
  
    getPermissionsAndReverseGeoCode();
  }, []);

  console.log("useState", location);
  
  
  return (
    <Layout style={Styles.container}>
      <View style={Styles.topLeftSection}>
      <Text category="h7" style={{marginRight:8}}>Deliver now</Text>
      <View style={Styles.addressContainer}>
      <Icon name="person-pin-circle" library='MaterialIcons' size={25} color={globalStyle.colors.primary}/>

      
    <View style={Styles.toggleContainer}>
      <DeliveryToggle />
    </View>
    </View>
      </View>
      <View >
        
      </View>
      <Layout style={Styles.bottomNavigationContainer}>
      
      <BottomNavigationComponent selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
      </Layout>
    </Layout>
  );
};

export default Home;
