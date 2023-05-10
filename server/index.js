const express = require('express')
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const colors = require('colors');
const connectDb = require('./config/db')
const port = process.env.PORT || 6000;

const app = express();

//connect to db
connectDb();

//graphql endpoint
app.use(cors());
app.use('/graphql',cors({ origin: "*" }),graphqlHTTP({
    schema,
    graphiql : process.env.NODE_ENV == "development" ? true : false,
}));

app.get('/',(req,res)=>{
    res.send("backend!!");
});

app.listen(port,()=> console.log("server is running on port "+port));
