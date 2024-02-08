const Order = require('../model/order');


const placeOrder = async(req,res)=>{
    const { user_id, items, status } = req.body;
    try{
        const order = new Order({
            user_id,
            items,
            status,
            created_at: Date.now(),
            updated_at: Date.now()
        });
        const data = await order.save();
        if(data){
         return res.status(201).json({ message: 'Order created successfully' });
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

const getOrders = async(req,res)=>{
  try{

    const orders = await Order.find();

   if(orders){
    return res.json(orders);
   }
   else{
    return res.json({message: "No orders found"});
   }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}

module.exports ={
    placeOrder,
    getOrders

}