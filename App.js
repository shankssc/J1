import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ApolloProvider } from '@apollo/client';

import client from './components/ClientProvider.js'

import Home from './screens/Home'
import FrontPage from './screens/FrontPage';
import Auth from './screens/Auth'
import Rest from './screens/Rest'
import CreateRest from './screens/CreateRest.js';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  return (
    <ApolloProvider client={client}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false}}
       initialRouteName="CreateRest">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Rest" component={Rest} />
        <Stack.Screen name="CreateRest" component={CreateRest} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;