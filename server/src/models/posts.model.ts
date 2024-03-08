import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPosts extends Document {
    content: string;
}

const postSchema: Schema<IPosts> = new Schema<IPosts>({
    content: {
        type: String,
        required: true,
    },
});

const Posts: Model<IPosts> = mongoose.model<IPosts>('Posts', postSchema);

export default Posts;
