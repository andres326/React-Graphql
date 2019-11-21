import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import { CLIENTES_QUERY } from '../../queries/clientes';

const Clientes = () => (
	<Query query={CLIENTES_QUERY}>
		{({ loading, error, data }) => {
			if (loading) return 'Cargando ...';
			if (error) return `Error: ${error.message}`;

			console.log(data.getClientes);
			return (
                <Fragment>
                    <h2 className="text-center">Listado de Clientes</h2>
                    <ul className="list-group mt-4">
                        {data.getClientes.map((client) => (
                            <li key={client.id} className="list-group-item">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-8 d-flex justify-content-between align-items-center">
                                        {client.nombre} {client.apellido} - {client.empresa}
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        <Link to={`cliente/editar/${client.id}`} className="btn btn-success d-block d-md-inline-block">
                                            Editar cliente
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Fragment>
            )
		}}
	</Query>
);

export default Clientes;
