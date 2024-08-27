const { default: mongoose} = require('mongoose');

//몽구스 스키마 생성부분
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    //꼭 존재해야함을 의미
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  price: {
    type: Number
  }
})

//몽구스 모델 생성
const Product = mongoose.model("Product", productSchema);

module.exports = Product;