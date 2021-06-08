const {Schema, model} = require('mongoose')

const User = new Schema({
    email : {type: String, required: true, unique: true },
    username : {type: String, required: true },
    password : {type: String, required: true },
    picture: {type: String },
    role: [{type: String, ref: 'Role'} ],
    date: {type: Date, default: Date.now()}
})

module.exports = model('User', User);
