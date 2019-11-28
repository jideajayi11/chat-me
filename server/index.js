import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { PubSub, GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';


const url = process.env.DB_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
mongoose.connection.once("open", () =>
  server.start(() => console.log("We make magic over at localhost:4000"))
);
