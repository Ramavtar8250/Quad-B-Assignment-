const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true

    },
    role: {
        type: String,
        default: "user",
    },
    profilePhoto: {
        type: String,

    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]


}, { timestamps: true })

export const User = mongoose.model('User', userSchema);