import express from "express"
import config from './config'
import morgan from 'morgan'

import ProductsRoutes from './routes/products.routes'

const app = express()

// Configuración
app.set('port', config.port)

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(ProductsRoutes)

export default app