const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.status(200).json({ success: true, message: 'Test' });
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
