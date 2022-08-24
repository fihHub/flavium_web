import mongoose, { Schema, models, model, mongo } from "mongoose";

mongoose.Promise = global.Promise

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicUrl: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
})

const User = models.User || model("User", userSchema)
export default User