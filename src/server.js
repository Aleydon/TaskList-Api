import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import Routes from './routes';
import './database';

const server = express();
const PORT = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());
server.use(Routes);

server.listen(PORT, (req, res) =>
  console.log(`Server running on port ${PORT}`)
);
