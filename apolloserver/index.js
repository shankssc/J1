import  {ApolloServer }  from "apollo-server-express"
import { PubSub } from 'graphql-subscriptions'
import ApolloServerPluginLandingPageLocalDefault  from "apollo-server-core";
import mongoose from 'mongoose'
import express from 'express';
import dotenv from 'dotenv';

import Auth from './services/authServices.js'
import typeDefs from './schemas/index.js'
import resolvers from './resolvers/index.js'
import AnalyticsExtension from './analyticsExtension.js'

dotenv.config()

const CONNECTION_URL = 'mongodb+srv://shankssc22:Beelzebub%4022@cluster0.y7bao9v.mongodb.net/?retryWrites=true&w=majority'

const pubsub = new PubSub()

const InitServer = async () => {
    const app = express()

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => ({ req, pubsub}),
        extensions: [() => new AnalyticsExtension()]
    })   

    await server.start();

    server.applyMiddleware({ app: app });

    app.use((req,res) => {
        res.send("Apollo express server is up and running");
    });

    try {
        await mongoose.connect(process.env.CONNECTION_URL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
    
        console.log('Mongoose connection was successful');
            
    } catch (error) {
        console.log(error.message)   
    }

    app.listen(process.env.PORT || 3000, () => console.log("Server is running sucessfully"));
}

InitServer()



  