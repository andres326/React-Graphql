import mongoose from 'mongoose';
import { Clientes } from './db';

export const resolvers = {
	Query: {
		getClientes: (root, {limite}) => {
			return new Promise((resolve, reject) => {
				Clientes.find({}, (err, clientes) => {
					if (err) reject(err);
					else resolve(clientes);
				}).limit(limite);
			});
		},
		getCliente: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Clientes.findById(id, (err, cliente) => {
					if (err) reject(err);
					else resolve(cliente);
				});
			});
		}
	},
	Mutation: {
		crearCliente: (root, { input }) => {
			const nuevoCliente = new Clientes({
				nombre: input.nombre,
				apellido: input.apellido,
				empresa: input.empresa,
				emails: input.emails,
				edad: input.edad,
				tipo: input.tipo,
				pedidos: input.pedidos
			});

			nuevoCliente.id = nuevoCliente._id;

			return new Promise((resolve, reject) => {
				nuevoCliente.save((err) => {
					if (err) reject(err);
					else resolve(nuevoCliente);
				});
			});
		},
		actualizarCliente: (root, { input }) => {
			return new Promise((resolve, reject) => {
				Clientes.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, cliente) => {
					if (err) reject(err);
					else resolve(cliente);
				});
			});
		},
		eliminarCliente: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Clientes.findOneAndRemove({ _id: id }, (err) => {
					if (err) reject(err);
					else resolve('Se eliminó correctamente');
				});
			});
		}
	}
};
