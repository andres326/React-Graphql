import express from 'express';
//graphql
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
//resolver
import { resolvers } from './data/resolvers';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
    console.log(`El servidor http://localhost:4000${server.graphqlPath} está arriba`)
})