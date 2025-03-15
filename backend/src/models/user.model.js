import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        }, 
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
    }, 
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;