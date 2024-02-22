import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { NextFunction } from 'express';

const user = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['freemium', 'premium', 'platinum', 'admin'],
            default: 'freemium',
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

user.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(7);
    this.password = await bcrypt.hash(this.password, salt);
});

user.methods.matchPassword = async function (passwd: string) {
    return await bcrypt.compare(passwd, this.password);
};

const User = mongoose.model('User', user);
export default User;
