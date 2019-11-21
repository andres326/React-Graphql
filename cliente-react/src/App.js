import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Header from './components/Header/Header';
import Clientes from './components/Clientes/Clientes';

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
			<Header />
			<div className="container">
				<Clientes />
			</div>
		</ApolloProvider>
	);
}

export default App;
