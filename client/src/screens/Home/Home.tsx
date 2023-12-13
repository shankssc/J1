import React, { useState } from 'react';

import { BottomNavigation, BottomNavigationTab, Layout, Text, Icon } from '@ui-kitten/components';

import { View,TouchableWithoutFeedback  } from 'react-native';

const Home = ({ navigation }: any): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  
  return (
    <Layout >
      <View >
      <Text category="h7" style={{marginRight:8}}>Deliver now</Text>
      <View >
    
    
    <View>
    </View>
    </View>
      </View>
      <View >
        
      </View>
      <Layout>
      
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}
        >
          <BottomNavigationTab title="Home" />
          <BottomNavigationTab title="Shop" />
          <BottomNavigationTab title="Browse" />
          <BottomNavigationTab title="Cart"  />
          <BottomNavigationTab title="Account" />
        </BottomNavigation>
      </Layout>
    </Layout>
  );
};

export default Home;
