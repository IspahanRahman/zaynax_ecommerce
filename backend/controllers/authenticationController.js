const User = require('../model/user');
const Admin = require('../model/admin');


const user_signup = async(req,res)=>{
    const { phone_number,password} = req.body;
    try{
        const user = new User({
            phone_number,
            password
        });
        const data = await user.save();
        if(data){
         return res.status(201).json({ message: 'User signup successfully' });
        }
        else{
         return res.status(500).json({ message: 'User signup failed' });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};


const admin_signIn = async(req,res)=>{
    const { user_code,password} = req.body;
    try{
        const admin = new Admin({
            user_code,
            password
        });
        const data = await admin.save();
        if(data){
         return res.status(201).json({ message: 'Admin signin successfully' });
        }
        else{
         return res.status(500).json({ message: 'Admin signin failed' });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

module.exports ={
    user_signup,
    admin_signIn
}