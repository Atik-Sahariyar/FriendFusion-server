const { Schema, model} = require('mongoose');

const PostsSchema = new Schema({
    authorInfo : {
        type: Object,
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        photoURL:{
            type: String
        },
        postsCount:{
            type: Number
        }
    },
    postTitle: {
        type: String
    },
    postTime: {
        type: String
    },
    postImg: {
        type: String
    },
    postDescription: {
        type: String
    },
    tag: {
        type: String
    },
    upVote: {
        type: Number
    },
    dounVote: {
        type: Number
    },
    share: {
        type: Number
    },
    comments: {
        type: Array
    }

});

const Posts = model('Posts', PostsSchema);

module.exports = Posts;
