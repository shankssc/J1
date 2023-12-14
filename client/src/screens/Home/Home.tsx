import React, { useState } from 'react';
import Styles from './Home.styles';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import Icon from '../../components/Icons';
import { View,TouchableWithoutFeedback  } from 'react-native';
import globalStyle from '../../styles/globalStyle';

const Home = ({ navigation }: any): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  
  return (
    <Layout style={Styles.container}>
      <View >
      <Text category="h7" style={{marginRight:8}}>Deliver now</Text>
      <View >
    
    
    <View>
    </View>
    </View>
      </View>
      <View >
        
      </View>
      <Layout style={Styles.bottomNavigationContainer}>
      
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
        >
          <BottomNavigationTab title="Home" icon={() => <Icon library='Ionicons' name='home' size={20} color={globalStyle.colors.primary}/>}/>
          <BottomNavigationTab title="Shop" icon={() => <Icon library='FontAwesome' name='shopping-basket' size={20} color={globalStyle.colors.primary}/>}/>
          <BottomNavigationTab title="Browse" icon={() => <Icon library='MaterialCommunityIcons' name='clipboard-text-search' size={20} color={globalStyle.colors.primary}/>}/>
          <BottomNavigationTab title="Cart"  icon={() => <Icon library='FontAwesome' name='shopping-cart' size={20} color={globalStyle.colors.primary}/>}/>
          <BottomNavigationTab title="Account" icon={() => <Icon library='Ionicons' name='md-person-circle-sharp' size={20} color={globalStyle.colors.primary}/>}/>
        </BottomNavigation>
      </Layout>
    </Layout>
  );
};

export default Home;
