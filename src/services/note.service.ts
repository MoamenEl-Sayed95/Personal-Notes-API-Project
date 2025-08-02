import Note, { INote } from '../models/note.model';

export const createNote = async (data: Partial<INote>) => {
  const existingNote = await Note.findOne({ title: data.title });
  if (existingNote) {
    throw new Error('Note with this title already exists');
  }
  return await new Note(data).save();
};

export const getAllNotes = async (tag?: string, page = 1, limit = 10) => {
  const filter: any = { isDeleted: false };
  if (tag) filter.tags = tag;
  return await Note.find(filter)
    .skip((page - 1) * limit)
    .limit(limit);
};

export const getNoteById = async (id: string) => {
  return await Note.findOne({ _id: id, isDeleted: false });
};

export const updateNote = async (id: string, data: Partial<INote>) => {
  return await Note.findOneAndUpdate({ _id: id, isDeleted: false }, data, { new: true });
};

export const deleteNote = async (id: string) => {
  return await Note.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};