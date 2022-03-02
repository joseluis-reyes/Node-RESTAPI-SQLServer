//import {getConnection, sql} from '../database/connection'
//import queris from '../database/query'
import { getConnection, sql, querys } from "../database"


export const getProducts = async (req, res) => {
	try {
		const conn = await getConnection()
		const result = await conn.query(querys.getAllProducts)
		res.json(result)
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}

}

export const createNewProduct = async (req, res) => {
	const {name, description} = req.body
	let {quantity} = req.body

	if(name == null || description == null) {
		return res.status(404).json({message:'Bad Request. Please fill all fields'})
	}
	if(quantity == null) quantity = 0

	try {
		const conn = await getConnection()
		const result = await conn.request()
			.input("name", sql.VarChar, name)        
			.input("description", sql.VarChar, description)
			.input("quantity", sql.Int, quantity)
			.query(querys.addNewProduct)
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
	
	res.json({name, description, quantity})
}

export const getProductById = async (req, res) => {
	const {id} = req.params
	try {
		const conn = await getConnection()
		const result = await conn.request()
			.input("id", sql.Int, id)
			.query(querys.getProductById)
		res.send(result.recordset[0])
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

export const deleteProduct = async (req, res) => {
	const {id} = req.params
	try {
		const conn = await getConnection()
		const result = await conn.request()
			.input("id", sql.Int, id)
			.query(querys.deleteProduct)
		res.sendStatus(204) // Eliminado Correcto
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

export const getTotalProducts = async (req, res) => {
	try {
		const conn = await getConnection()
		const result = await conn.request()
			.query(querys.getTotalProducts)
		res.json({total: result.recordset[0]['total']})
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

export const updateProductById = async (req, res) => {
	const {name, description, quantity} = req.body
	const {id} = req.body

	if(name == null || description == null || quantity == null) {
		return res.status(404).json({message:'Bad Request. Please fill all fields'})
	}

	try {
		const conn = await getConnection()
		const result = await conn.request()
			.input('id', sql.Int, id)
			.input('name', sql.VarChar, name)
			.input('description', sql.VarChar, description)
			.input('quantity', sql.Int, quantity)
			.query(querys.updateProductbyId)
		res.json({id:id, name: name, description: description, quantity: quantity})
	} catch (error) {
		res.status(500)
		res.send(error.message)		
	}
}