const users = require('../model/user');
const {validateLogin} = require('../middlewares/validate');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();




module.exports.login = async function(req,res){
    try{
        const error = await validateLogin(req.body);
        if(error){
            return res.status(400).json({
                message:error
            })
        }else{
            let user = await users.findOne({email:req.body.email})

            if(!user) {
            return res.status(400).json({
                message:"Email/password wrong"
            })
            }

            const validPassword = await bcrypt.compare(req.body.password,user.password);

            if(!validPassword){
                res.status(400).json({
                    message:"Email/password wrong"
                })
            }else{
                
            

            const token = jwt.sign({_id : user._id},process.env.SECRET_KEY);
            res.setHeader('auth-token',token);
            // return res.status(200).json({
            //     message:"Succesfully logged in!!!!!",
            //     token:token

            // });

            res.redirect('/users/quiz');

            
            
            }
            
    }
    }catch(err){
        console.log(err);
    }
    




} 