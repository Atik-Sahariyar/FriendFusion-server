const { Schema, model} = require('mongoose');

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    photo:{
        type: String
    },
    password:{
        type: String
    },
    role: {
        type: String
    }, 
    membership: {
       type: Boolean
    }
    
});

const Users = model('Users', UsersSchema);

module.exports = Users;


