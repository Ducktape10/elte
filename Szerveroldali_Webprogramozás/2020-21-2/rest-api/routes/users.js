const express = require('express');
const User = require('../models').user;
const router = express.Router();
const { createHash } = require('crypto');

router
  .get('/', async (req, res) => {
    const users = await User.findAll();

    res.send(users);
  })
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ where: { id } });

    res.send(user);
  })
  .post('/', async (req, res) => {
    const md5 = createHash('md5');
    const hashed = md5.update(req.body.password).digest('hex');

    try {
      await User.create({
        ...req.body,
        password: hashed,
      });
    } catch (err) {
      console.log(err);
    }

    const users = await User.findAll();

    res.send(users);
  })
  .put('/:id', async (req, res) => {
    const user = await User.update(req.body, { where: { id: req.params.id } });
    res.send(user);
  })
  .delete('/:id', async (req, res) => {
    await User.destroy({ where: { id: req.params.id } });
    const users = await User.findAll();

    res.send(users);
  });

module.exports = router;