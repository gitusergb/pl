const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  name: { type:String,required:true},
  material: { type:String,required:true},
  Length: { type:String,required:false},
  Shape: { type:String,required:false},
  Price: { type:String,required:false},
  grade: { type:Number,required:true},
  ID:{ type:String},
},{
    versionKey:false
});

const productModel = mongoose.model('product', productSchema);

module.exports = {productModel};
