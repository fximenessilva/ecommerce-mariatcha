import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


const app = express();
app.use(cors());

app.use(express.json())
dotenv.config();

connectDB();

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8888

app.get('/', (req, res) => {
    res.send('API RUNNING......')
})

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)