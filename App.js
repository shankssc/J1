import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import client from './components/ClientProvider.js'

import Home from './screens/Home'
import FrontPage from './screens/FrontPage';
import Auth from './screens/Auth'
import Rest from './screens/Rest'
import CreateRest from './screens/CreateRest';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  /*
  return (
    <ApolloProvider client={client}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false}}
       initialRouteName="FrontPage">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FrontPage" component={FrontPage} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Rest" component={Rest} />
        <Stack.Screen name="CreateRest" component={CreateRest} />
      </Stack.Navigator>
    </NavigationContainer>
    </ApolloProvider>
  );
  */
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<FrontPage/>} />
      <Route exact path='/auth' element={<Auth/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/createRest' element={<CreateRest/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;