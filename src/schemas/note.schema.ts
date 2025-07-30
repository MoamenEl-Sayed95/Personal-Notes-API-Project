import Joi from 'joi';

export const createNoteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional()
});

export const updateNoteSchema = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional()
});