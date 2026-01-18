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

app.put('/items/:id', (req, res) => {
  console.log('update item with id', req.params.id);
  const itemIndex = items.findIndex((item) => item.id == req.params.id);
  res.json(itemIndex);
  if (itemIndex !== -1) {
    items[itemIndex] = { id: items[itemIndex].id, ...req.body };
    res.json({ message: 'Item updated', item: items[itemIndex] });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// TODO add DELETE route
app.delete('/items/:id', (req, res) => {
  console.log('delete item with id', req.params.id);
  const itemIndex = items.findIndex((item) => item.id == req.params.id);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});


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
