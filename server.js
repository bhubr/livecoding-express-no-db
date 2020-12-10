const express = require('express');

const port = 5000;

const app = express();

// Indiquer à Express qu'il doit analyser
// les données entrantes en JSON
app.use(express.json());

// Routes

app.get('/', (req, res) => {
  res
    // .set('content-type', 'text/plain')
    .end('<h1>hello</h1>');
});

const users = [
  { id: 1, name: 'John Lennon' },
  { id: 2, name: 'Ringo Starr' }
];

// Créer un utilisateur
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  }
  users.push(newUser);
  res.send(newUser);
});

// Récupérer une liste d'utilisateurs
app.get('/users', (req, res) => {
  res.send(users);
});

// Récupérer un utilisateur spécifique
app.get('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(item => item.id === userId);
  res.send(user);
});

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened', err.message);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
