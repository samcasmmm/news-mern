import mongoose, { Schema, Document, Model, Mongoose } from 'mongoose';

export interface IPosts extends Document {
    title: string;
    thumbnail: string;
    author: Schema.Types.ObjectId;
    content: string;
}

const postSchema: Schema<IPosts> = new Schema<IPosts>({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: false,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
});

const Posts: Model<IPosts> = mongoose.model<IPosts>('Posts', postSchema);

export default Posts;
