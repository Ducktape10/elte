const jwt = require('express-jwt');
const { sign } = require('jsonwebtoken');
const express = require('express');
const Pet = require('./models').pet;
const User = require('./models').user;
const models = require('./models');

const GraphQl = require('./graphql');

const app = express();

const jwtMiddleware = jwt({
  algorithms: ['HS256'],
  secret: 'secret'
});

const userRoutes = require('./routes/users');

(async () => {
  // await User.sync({ force: true });
  // await Pet.sync({ force: true });

  await models.sequelize.sync({ force: true });

  // dummy adatok a teszteléshez

  const p = await Pet.create({
    name: 'pet neve'
  });

  const u = await User.create({
    name: 'user',
    password: 'user'
  });

  await u.setPets(p);

})();

app.use(express.json());
app.use('/users', userRoutes);

app.use('/graphql', GraphQl);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listens on port ${process.env.PORT || 3000}`);
});

app.post('/pets', async (req, res) => {
  try {
    await Pet.create(req.body);
  } catch (err) {
    console.log(err);
  }

  res.sendStatus(200);
});

app.get('/protected', jwtMiddleware, (req, res) => {
  res.send(req.user);
});

app.post('/temp-login', (req, res) => {
  if (req.body.data === 'logmein') {
    const token = sign({ id: '1', isAdmin: true }, 'secret', { expiresIn: '30m' })
    res.send({ token });
    return;
  }
  res.sendStatus(403);
});


app.get('/', async (req, res) => {
  const pet = await Pet.findOne({ where: { id: 1 } });
  const user = await pet.getUser();

  res.send(user);
});

module.exports = app;