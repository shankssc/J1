import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import { generateClient } from 'aws-amplify/api';
import { createTodo } from './src/graphql/mutations';
import { listTodos } from './src/graphql/queries';

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import Home from './src/screens/Home/Home';
import Auth from './src/screens/Auth/Auth';

Amplify.configure(amplifyconfig);

// retrieves only the current value of 'user' from 'useAuthenticator'

const userSelector = (context:any) => [context.user];

interface Todo {
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
}

/*
const SignOutButton = () => {

  const { user, signOut } = useAuthenticator(userSelector);

  return (

    <Pressable onPress={signOut} style={styles.buttonContainer}>

      <Text style={styles.buttonText}>

        Hello, {user.username}! Click here to sign out!

      </Text>

    </Pressable>

  );

};
*/

const initialState: Todo = { id: '', name: '', description: '', createdAt: '', updatedAt: '' };
const client = generateClient();
const Stack = createNativeStackNavigator();

const App = () => {
  const [formState, setFormState] = useState<Todo>(initialState);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key: keyof Todo, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos
      });
      const todos = todoData.data.listTodos.items as Todo[];
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await client.graphql({
        query: createTodo,
        variables: {
          input: todo
        }
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }
  /*
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          onChangeText={(value) => setInput('name', value)}
          style={styles.input}
          value={formState.name}
          placeholder="Name"
        />
        <TextInput
          onChangeText={(value) => setInput('description', value)}
          style={styles.input}
          value={formState.description || ''}
          placeholder="Description"
        />
        <Pressable onPress={addTodo} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create todo</Text>
        </Pressable>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.todo}>
            <Text style={styles.todoName}>{todo.name}</Text>
            <Text style={styles.todoDescription}>{todo.description}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
  */
  return (
    <SafeAreaView>
      <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Auth'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Auth' component={Auth}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaView>
  );
};

export default App;

/*
const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: {
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: {fontSize: 10},
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 }
});
*/