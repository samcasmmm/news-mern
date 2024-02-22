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
});
