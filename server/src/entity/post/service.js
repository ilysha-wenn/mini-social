const Post = require('./model');
const User = require('../user/model');
const fileService = require('../../serviceFiles/fileService');

module.exports.GetAll = async()=>{
    const posts = await Post.find();
    return posts;
}

module.exports.GetOne = async(id)=>{
    if(!id) throw new Error('Id undef');
    const post = await Post.findById(id);
    return post;
}

module.exports.Create = async(post, picture)=>{
    const {title, content, author} = post;
    const authorPost = await User.findOne({username: author});
    if(!authorPost) throw new Error('Author undef');
    const fileName = fileService.saveFile(picture);
    const savePost = await Post.create({title, content, author: authorPost.username, picture: fileName})
    return savePost;
}

module.exports.Update = async(post)=>{
    if(post._id) throw new Error('id undef');
    const updPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
    return updPost;
}