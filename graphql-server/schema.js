import {buildSchema} from 'graphql';

const schema = buildSchema(`
    type Cliente{
        id: ID
        nombre: String
        apellido: String
        empresa: String
        emails: [Email]
        edad: Int
        tipo: TipoCliente
        pedidos: [Pedido]
    }
    type Email{
        email: String
    }
    type Pedido{
        producto: String
        precio: Int
    }
    enum TipoCliente{
        BASICO
        PREMIUM
    }
    type Query{
        getCliente(id: ID): Cliente
    }
    input PedidoInput{
        producto: String
        precio: Int
    }
    input EmailInput{
        email: String
    }
    """ Campos para los clientes nuevos """
    input ClienteInput{
        id: ID
        nombre: String!
        apellido: String!
        empresa: String!
        emails: [EmailInput]!
        edad: Int!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
    }
    """ Mutations para crear un nuevo cliente """
    type Mutation{
        #Nombre del resolver para crear un cliente, recibe un input y devuelve un Cliente
        """ Te permite crear nuevos clientes """
        crearCliente(input: ClienteInput): Cliente
    }
`);

export default schema;