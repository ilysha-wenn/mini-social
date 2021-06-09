const Message = require('./model');
const User = require('../user/model');
const fileService = require('../../serviceFiles/fileService');

module.exports.GetAll = async()=>{
    const message = await Message.find();
    return message;
}

module.exports.GetOne= async(id)=>{
    if(!id) throw new Error('Id undefined');
    const message = await Message.findById(id);
    return message;
}

module.exports.Create = async(message, picture)=>{
    const {recipient, title, content, author} = message;
    
    const authorPost = await User.findOne({username: author});
    if(!authorPost) throw new Error('Author undef');

    const recipientPost = await User.findOne({username: recipient});
    if(!recipientPost) throw new Error('Recipien undef');

    const fileName = fileService.saveFile(picture);
    const saveMessage = await Message.create({
        recipient : recipientPost.username,
        title : title, content : content, author: authorPost.username,
        picture: fileName});
    
    return saveMessage;
}

module.exports.Update = async(message)=>{
    if(!message._id) throw new Error('Id undef');
    const updMessage = await Message.findByIdAndUpdate(message._id, message, { new: true });
    return updMessage;
}

module.exports.Delete = async(id)=>{
    if(!id) throw new Error('Id undef');
    const deleted = await Message.findByIdAndDelete(id);
}