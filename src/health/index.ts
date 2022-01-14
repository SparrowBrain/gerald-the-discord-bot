import { HealthEndpointPort } from '../config';
import express from 'express';

const app = express();

const health = () => {
  app.get('/health', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('OK');
  });

  app.listen(HealthEndpointPort, () => {
  });
};

export default health;
