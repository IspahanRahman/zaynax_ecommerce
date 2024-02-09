const Product = require('../model/product');

const create_product = async(req,res)=>{
    const { productName, productPrice, discount,shipping_charge,color,size,status } = req.body;
    try{
        const product = new Product({
            productName,
            productPrice,
            discount,
            shipping_charge,
            color,
            size,
            status
        });
        const data = await product.save();
        if(data){
         return res.status(201).json({ message: 'Product created successfully' });
        }
        else{
         return res.status(500).json({ message: 'Data is not insert' });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

const getProducts = async(req,res)=>{
  try{

    const products = await Product.find();

   if(products){
    return res.json(products);
   }
   else{
    return res.json({message: "No products found"});
   }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}

module.exports ={
    create_product,
    getProducts

}