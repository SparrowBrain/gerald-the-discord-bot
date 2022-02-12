import { ApiPort } from '../config';
import express from 'express';
import { Server } from 'http';

const app = express();
let server: Server;

const api = () => {
  app.get('/health', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('OK');
  });

  app.post('/stop', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('OK');
    process.kill(process.pid, 'SIGTERM')
  });

  server = app.listen(ApiPort, () => {
  });
};

process.on('SIGTERM', () => {
  server?.close();
  console.log('api server closed');
});

export default api;
