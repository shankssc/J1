import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client

const client = new ApolloClient({

    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),

  });

export default client

