import express from 'express';
import { getItems, putItemById, getItemById, deleteItemById, postItem } from './items.js';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;



// parsitaan json data request ja lisää request-objektiin
app.use(express.json());

//Tarjoillaan webbisivut (frontend) palvelimen juuressa

app.use(express.static('public'));


// API root
app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

// Endpoints for items resource
// Get all items
app.get('/api/items', getItems);

// Get items based on id
app.get('/api/items/:id', getItemById);

// TOOD: add PUT route

app.put('/api/items/:id', putItemById );

// TODO add DELETE route
app.delete('/api/items/:id', deleteItemById);


// Add new item
app.post('/api/items', postItem );

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
