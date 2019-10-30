import express from 'express';
//graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema'; 

const app = express();

app.get('/', (req, res) => {
    res.send('Todo ok');
});

//Resolver
const root = {
    cliente: () => {
        return {
            "id": 12781782,
            "nombre": "Pablo",
            "apellido": "Cubillos",
            "empresa": "RC",
            "email": "pablo@correo.com"
        }
    }
};

app.use('/graphql', graphqlHTTP({
    //Que schema va a usar en esa url
    schema,
    //resolver se pasa como rootvalue
    rootValue: root,
    //utilizar graphiql
    graphiql: true
}));

app.listen(8000, () => console.log('Server funcionando'));