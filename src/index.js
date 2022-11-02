import express from 'express'
import { productRouter } from './routers/ProductRouter.js';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json())

app.use('/api/productos', productRouter)

app.listen( PORT, () => console.log(`Server listening on PORT ` + PORT));