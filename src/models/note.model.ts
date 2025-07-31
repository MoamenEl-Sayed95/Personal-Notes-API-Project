import mongoose, { Schema, Document } from 'mongoose';

export interface INote extends Document {
  title: string;
  content?: string;
  tags?: string[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const noteSchema = new Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String },
    tags: [{ type: String }],
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<INote>('Note', noteSchema);