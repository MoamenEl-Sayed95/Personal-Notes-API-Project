import mongoose, { Schema, Document } from 'mongoose';

export interface INote extends Document {
  title: string;
  content?: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String },
    tags: [{ type: String }],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

export default mongoose.model<INote>('Note', noteSchema);