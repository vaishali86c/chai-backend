import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true  // expensive but use for searching
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avtar: {
            type: String,         // cloudinary url
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

// hooks
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next(); 

    this.password = bcrypt.hash(this.password, 10)
    next()
})

// custom methods

// userSchema.methods.isPasswordCorrect = async function (password) {
//     bcrypt.compare(password, this)
// } 

export const User = mongoose.model("User", userSchema)