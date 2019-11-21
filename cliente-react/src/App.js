import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Clientes from './components/Clientes/Clientes';
import NuevoCliente from './components/Clientes/NuevoCliente';
import EditarCliente from './components/Clientes/EditarCliente';

const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	onError: ({ networkError, graphQLErrors }) => {
		console.log('graphQLErrors', graphQLErrors);
		console.log('networkError', networkError);
	}
});

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Fragment>
					<Header />
					<div className="container">
						<Switch>
              <Route exact path="/" component={Clientes} />
              <Route exact path="/cliente/nuevo" component={NuevoCliente} />
              <Route exact path="/cliente/editar/:id" component={EditarCliente} />
            </Switch>
					</div>
				</Fragment>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
