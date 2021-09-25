import express, { Request, Response} from 'express'
import { Product, ProductStore } from '../models/products'
import jwt, { Secret } from 'jsonwebtoken'
import verifyAuthToken from '../middleware/auth'

const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
    try {
        const products = await store.index()
        res.json(products)
    } catch (err) {
        console.log(err)
    }
}

const show = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await store.show(req.params.id)
        res.json(products)
    } catch (err) {
        console.log(err)
    }
}

const create = async (req: Request, res: Response): Promise<void> => {
    let request = req.body;
    const product: Product = {
        name: request.name,
        price: request.price,
        url: request.url,
        description: request.description,
    }
    try {
        const newProduct = await store.create(product);
        res.json(newProduct)
    } catch (err) {
        res.json({error: err})
        console.log(err)
    }
}

const deleteP = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId = await store.delete(req.body.id)
        // res.json(productId)
        res.json({productId})
    } catch (err) {
        console.log(err)
    }
}

const products_routes = (app: express.Router): void =>  {
    app.get('/products', index)
    app.get('/products/:id', verifyAuthToken, show); 
    app.post('/products', create)
    app.delete('/products', deleteP)
}

export default products_routes;