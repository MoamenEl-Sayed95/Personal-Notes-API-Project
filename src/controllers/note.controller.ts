import { Request, Response, NextFunction } from 'express';
import * as noteService from '../services/note.service';

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await noteService.createNote(req.body);
    res.status(201).json(note);
  } catch (err: any) {
    if (err.message === 'Note with this title already exists') {
      return res.status(409).json({ message: err.message });
    }
    next(err);
  }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { tag, page = '1', limit = '10' } = req.query;
    const notes = await noteService.getAllNotes(
      tag as string,
      parseInt(page as string),
      parseInt(limit as string)
    );
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await noteService.getNoteById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await noteService.updateNote(req.params.id, req.body);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await noteService.deleteNote(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};