import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema'; 
//resolver
import resolvers from './resolvers';

const app = express();

const root = resolvers;

app.get('/', (req, res) => {
    res.send('Todo ok');
});

app.use('/graphql', graphqlHTTP({
    //Que schema va a usar en esa url
    schema,
    //resolver se pasa como rootvalue
    rootValue: root,
    //utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => console.log('Server funcionando'));