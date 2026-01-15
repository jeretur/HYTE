import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;


// Dummy data (nollataan aina kun sovelluksen käynnistää uudelleen)
const items = [
  {id: 1, name: 'Maitorahka'},
  {id: 2, name: 'Banaani'},
  {id: 3, name: 'Hunaja'},
];

// parsitaan json data request ja lisää request-objektiin
app.use(express.json());

// API root
app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get items based on id
app.get('/items/:id', (req, res) => {
  console.log('get item with id', req.params.id);
  const itemFound = items.find((item) => item.id == req.params.id);
  res.json(itemFound);
  if (itemFound) {
    res.json(itemFound);
  } else {
    res.status(404).json({message: 'Item not found'});
  }
});

// TOOD: add PUT route
// TODO add DELETE route

// Add new item
app.post('/items', (req, res) => {
  //console.log('add item request body', req.body);
  //TODO: lisää id listaan ja tarkista että body sisältää name kentän
  items.push(req.body);
  res.status(201).json({message: 'uusi itemi lisätty.'});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
