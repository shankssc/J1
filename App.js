import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import {ApolloProvider } from '@apollo/react-hooks';
import { createApolloClient } from './src/common/ApolloClient/Client'

import Home from './screens/Home'
import FrontPage from './screens/FrontPage';
import Auth from './screens/Auth'

const apolloClient = createApolloClient();

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
    <ApolloProvider client={apolloClient}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false}}
       initialRouteName="FrontPage">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;