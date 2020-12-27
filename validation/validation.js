const Joi = require('@hapi/joi')


module.exports.signUpValidation = function(data){

    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data,schema);

}

module.exports.loginValidation = function(data){

    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data,schema);

}

module.exports.changePasswordValidation = function(data){

    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        newPassword:Joi.string().min(6).required(),
        confirmPassword:Joi.string().min(6).required(),

    };
    return Joi.validate(data,schema);


}