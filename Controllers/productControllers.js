const bcrypt = require('bcrypt');
const {productModel}= require('../Models/product.model');


//post
const createproduct = async (req, res) => {
  try { 
const product = new productModel(req.body)
await product.save()
res.status(200).json({ msg:'A new product has been Created',product:product});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//get
const seeproduct =async( req ,res)=>{
    try { 
        const product = await productModel.find();

      //console.log(product)

        res.status(200).send(product);
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

}

//get_product_by_id
const Idgetproduct =async( req ,res)=>{
  const {productID}=req.params
    try { 
        const product = await productModel.findOne({_id:productID})
        if(req.body.productID===product.productID){
          res.status(200).send(product);}
        } catch (error) {
          res.status(400).send({ error: error.message });
        }

}
//update/patch
const updateproduct =async(req ,res)=>{
const {productID}=req.params
    try { 
        const product = await productModel.findOne({_id:productID})
        if(req.body.productID===product.productID){
       await productModel.findByIdAndUpdate({_id:productID},req.body)
       res.status(200).send({ msg:`product with Id:${productID} has been updated`});}
       else{
        res.status(400).send({ msg:`You are not Authorised`});}
       
          } catch (error) {
            res.status(400).send({ error: error.message });
          }

}


//delete
const deleteproduct =async(req ,res)=>{
    const {productID}=req.params
        try { 
            const product = await productModel.findOne({_id:productID})
            if(req.body.productID===product.productID){
           await productModel.findByIdAndDelete({_id:productID})
           res.status(200).send({ msg:`product with Id:${productID} has been deleted`});}
           else{
            res.status(400).send({ msg:`You are not Authorised`});}
           
              } catch (error) {
                res.status(400).send({ error: error.message });
              }
    
    }

module.exports = {createproduct,seeproduct,Idgetproduct,updateproduct,deleteproduct};