const users = require('../model/user');
const {validateSignup} = require('../middlewares/validate');
const bcrypt = require('bcrypt');

module.exports.signup = async function(req,res){
    //validation

    try{
    const error = await validateSignup(req.body);
    if(error){
        res.status(400).json({
            message:error
        })
    }else{
        //if user is already registered

        let user = await users.findOne({email:req.body.email})

        if(user) {
            res.status(400).json({
                message:"User Already registered pls login"
            })
        }else{
            //hashing password
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(req.body.password,salt);

        let newUser = await users.create({
                email :req.body.email,
                password :hashedpassword,
            
            })

            res.status(200).json({
                message:"Account succesfully registered!!!!"
            })


        }

}
}catch(err){
    console.log(err);
}

}