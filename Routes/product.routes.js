const express = require('express');
const {createproduct,seeproduct,Idgetproduct,updateproduct,deleteproduct} = require('../Controllers/productControllers');


const productRouter = express.Router();

productRouter.post('/create', createproduct);
productRouter.get('/', seeproduct);
productRouter.get('/:productID', Idgetproduct);
productRouter.patch('/update/:productID', updateproduct);
productRouter.delete('/delete/:productID' ,deleteproduct);

module.exports = {productRouter};