import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import {schema} from './data/schema'; 
//resolver
import resolvers from './data/resolvers';

const app = express();

app.get('/', (req, res) => {
    res.send('Todo ok');
});

app.use('/graphql', graphqlHTTP({
    //Que schema va a usar en esa url
    schema,
    //utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => console.log('Server funcionando'));