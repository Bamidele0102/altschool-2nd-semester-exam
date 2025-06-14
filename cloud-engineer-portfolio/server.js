import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
import helmet from 'helmet';
app.use(helmet());

app.use((req, res, next) => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
	next();
});

// Serve static files from /public at the root (so /project.html works)
app.use(express.static(path.join(__dirname, 'public')));

// Serve static files from /src (optional, for dev)
app.use('/src', express.static(path.join(__dirname, 'src')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Optional: Route for /project (if you want /project as well as /project.html)
app.get('/project', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'project.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`);
});
