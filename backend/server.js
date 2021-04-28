import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import products from './data/products.js'
import colors from 'colors'


const app = express();
app.use(cors());

dotenv.config();

connectDB();

const PORT = process.env.PORT || 8888

app.get('/', (req, res) => {
    res.send('API RUNNING......')
})

app.get('/api/products', (req, res)=> {
    res.json(products)
})


app.get('/api/products/:id', (req, res)=> {
    const product = products.find(p => p._id === req.params.id);
    res.json(product)
});

app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
)