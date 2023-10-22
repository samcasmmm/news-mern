import express from 'express';
import createApp from './app.js';

const PORT = Number(process.env.PORT) || 9000;

const app = createApp([], PORT);

app.use('/', (req, res) => {
  res.json({
    status: res.statusCode,
    message: 'success',
    meta: '',
    data: '',
  });
});

app.listen(9000, () => {
  console.log(`Server http://localhost:${process.env.PORT}`);
});
