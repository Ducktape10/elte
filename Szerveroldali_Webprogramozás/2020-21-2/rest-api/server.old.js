const express = require('express');
const app = express();

const lettersRouter = require('./routes/letters');

app.use(express.json());
app.use('/letters', lettersRouter);

// app.use((req, res) => {
//   res.status(404).send('nem létezik :c');
// });

// GET
app.get('/', (req, res) => {
  console.log(req.query.number);

  res.send('Hello');
});

// POST
app.post('/', (req, res) => {
  console.log(req.body.name);
  console.log(req.body.apds?.apsdi);

  res.sendStatus(200);
});

// app.get('*', (req, res) => {
  // res.status(404).send('nem létezik :c');
  // res.status(404).json('nem létezik :c');

  // res.send('nem létezik :C');
// });


// '/letters/:letter'
// ha nincs `:letter` akkor az ez a route:
// '/letters'


// dinamikus paraméter: `number`
// post body: `multiplier`
// vissza kell adnia: szorzás eredményét

app.post('/multiply/:number', (req, res) => {
  const number = req.params.number;
  const multiplier = req.body.multiplier;

  res.send({ result: number * multiplier });
})


// """játék"""

const users = [
  {
    name: 'Player1',
    inventory: [],
    goldAmount: 10,
    damage: 1,
  },
  {
    name: 'Player2',
    inventory: [],
    goldAmount: 15,
    damage: 2,
  },
  {
    name: 'Player3',
    inventory: [],
    goldAmount: 12,
    damage: 5,
  },
];

app.get('/users/:username', (req, res) => {
  const username = req.params.username;

  const user = users.find((u) => u.name === username);

  res.send(user ?? {
    status: 'ERROR',
    messages: ['Nincs ilyen felhasználó!']
   });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listens on port ${process.env.PORT || 3000}`);
});

