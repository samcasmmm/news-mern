import express from 'express';
import createApp from './app.js';

const app = createApp([], 9000);

app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});
