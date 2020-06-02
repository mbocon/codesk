const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const postSchema = new Schema({
    category: Boolean,
    text: {
        String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
    
});
//  Create Model from our Schema
const Post = mongoose.model('post', postSchema);
// Export model
module.exports = Client;

