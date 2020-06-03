const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const postSchema = new Schema({
    category: [ 'Javascript', 'Jquery', 'Algorithm', 'React', 'CSS', 'HTML', 'ALL OTHER' ],
    date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
    
});
//  Create Model from our Schema
const Post = mongoose.model('post', postSchema);

// Export model
module.exports = Post;

