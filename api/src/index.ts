import express from 'express';
import createApp from './app.js';
import { Controllers } from '@/utils/index.js';

const app = createApp([], 9000);

app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});
//
//
//
