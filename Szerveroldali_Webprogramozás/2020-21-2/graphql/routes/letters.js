const express = require('express');
const router = express.Router();

// router
//   .get('/a')
//   .get('/b')
//   .get('/c')
//   .post('/d')
// NEM /a/b/c/d
// /a
// /b
// ..


router
  .get('/start', (req, res) => {
    console.log('started');
    res.send('a');
  })
  .get('/pause', (req, res) => {
  console.log('paused');
  res.send('b');
  })
  .get('/stop', (req, res) => {
  console.log('stoped');
  res.send('b');
  });


module.exports = router;