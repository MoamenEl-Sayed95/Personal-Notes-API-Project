import express from 'express';
import noteRoutes from './routes/note.routes';
import errorHandler from './middlewares/errorHandler';
import notFound from './middlewares/notFound';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

export default app;