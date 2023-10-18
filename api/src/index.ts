import express from 'express';
import createApp from './app.js';

let data: [{ router: string }] = [{ router: '/h1' }];

const app = createApp(data, 9000);

app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});
//
//
//
