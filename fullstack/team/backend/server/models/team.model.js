const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    author: {
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name needs to be at least 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [3, "Email needs to be at least 10 characters"]
    },
    image: {
        type: String
    },
    books: {
        type: Array
    },
    genre: {
        type: Array
    },
    likes:{
        type: Number,
        default: 0
    }
},{timestamps:true});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;