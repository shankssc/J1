import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import { PubSub } from 'graphql-subscriptions';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { buildSchemaSync } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http';
import cors from 'cors';
import { typeDefs, resolvers } from './utils/dummySchema';

interface MyContext {
  token?: String;
}

const initializeServer = async () => {
  // dotenv.config({ path: '../.env' });
  dotenv.config()
  const pubsub = new PubSub();

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  try {
    /*
    const options: ConnectOptions = {
        // useNewUrlParser: true, 
        useUnifiedTopology: true

    }
    */
   
    await mongoose.connect(process.env.CONNECTION_URL!);
    // console.log('Mongoose connection was successful');
        
} catch (error:any) {
    console.log(error.message);
}

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: process.env.PORT || 3000 }, resolve));
  console.log(`🚀 Server ready`);
};

// Call the async function immediately
initializeServer().catch((error) => console.error(error));
