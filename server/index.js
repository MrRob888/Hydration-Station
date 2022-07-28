const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// const connectDB = require('./config/connection');

const port = process.env.PORT || 5000;
const app = express();

// Connect to Database
// connectDB();

app.listen(port, console.log(`Now listening on port ${port}`));

app.use('./graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));
