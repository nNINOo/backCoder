import { Router } from 'express';
import { ContainerMemory } from '../containers/ContainerMemory.js';

const productRouter = Router()

const ProductMemory = new ContainerMemory()

productRouter.get('/', (req, res) => {
    const products = ProductMemory.getAll()
    res.send({ success: true, data: products })
});

productRouter.get('/:id', (req, res) => {
    const {id} = req.params
    const product = ProductMemory.getById(Number(id))

    if(!product) {
        return res.send({ success: false, data: undefined })
    }
    res.send({ success: true, data: product })
});

productRouter.post('/', (req, res) => {
    const {title, price, thumbnail} = req.body;

    const product = ProductMemory.save({title, price, thumbnail});

    res.send({ success: true, data: { id: product.id } });
})

productRouter.put('/:id', (req, res) => {
    const {id} = req.params
    const {title, price, thumbnail} = req.body;

    const updatedProduct = ProductMemory.updateById(id, {title, price, thumbnail});

    res.send({ success: true, data: { update: updatedProduct} });
})


export { productRouter };