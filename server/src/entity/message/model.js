const {Schema, model} = require('mongoose');

const Message = new Schema({
    recipient : {type: String, ref: 'User'},
    title : {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String},
    author: {type: String, ref: 'User'},
    date: {type: Date, default: Date.now()}
})

module.exports = model('Message', Message);