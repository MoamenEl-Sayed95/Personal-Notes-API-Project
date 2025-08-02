import express from 'express';
import { logger } from './middlewares/logger';
import noteRoutes from './routes/note.routes';
import errorHandler from './middlewares/errorHandler';
import notFound from './middlewares/notFound';

// Create Express app
const app = express();

// Middlewares
app.use(express.json());

// Log incoming requests
app.use(logger);

// Routes
app.use('/api/notes', noteRoutes);

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

export default app;