const PromoCode = require('../model/promo_code');

const create_promo_code = async(req,res)=>{
    const { promo_code, start_date, end_date,discount_rate,status} = req.body;
    try{
        const code = new PromoCode({
            promo_code,
            start_date,
            end_date,
            discount_rate,
            status
        });
        const data = await code.save();
        if(data){
         return res.status(201).json({ message: 'Promo code created successfully' });
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

const getPromoCodes = async(req,res)=>{
  try{

    const codes = await PromoCode.find();

   if(codes){
    return res.json(codes);
   }
   else{
    return res.json({message: "No codes found"});
   }
  }catch(error){
    console.log(error);
    return res.status(500).json({message:"Internal Server Error"});
  }
}

module.exports ={
    create_promo_code,
    getPromoCodes

}