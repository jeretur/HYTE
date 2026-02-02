import items from '../models/item-model.js';

const getItems = (req, res) => {
res.json(items);
};

const getItemById = (req, res) => {
  console.log('get item with id', req.params.id);
  const itemFound = items.find((item) => item.id == req.params.id);
  res.json(itemFound);
  if (itemFound) {
    res.json(itemFound);
  } else {
    res.status(404).json({message: 'Item not found'});
  }
}

const putItemById = (req, res) => {
  console.log('update item with id', req.params.id);
  const itemIndex = items.findIndex((item) => item.id == req.params.id);
  if (itemIndex !== -1) {
    items[itemIndex] = { id: parseInt(req.params.id), ...req.body };
    res.json({ message: 'Item updated', item: items[itemIndex] });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

const deleteItemById = (req, res) => {
  console.log('delete item with id', req.params.id);
  const itemIndex = items.findIndex((item) => item.id == req.params.id);
  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
};

const postItem = (req, res) => {
  //console.log('add item request body', req.body);
  //TODO: lisää id listaan ja tarkista että body sisältää name kentän
  const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  req.body.id = newId;
  if (req.body.name) {
    items.push(req.body);
    res.status(201).json({message: 'Item added', item: req.body});
  } else {
    res.status(400).json({message: 'Invalid item data'});
  }
};

export {
  getItems,
  getItemById,
  putItemById,
  deleteItemById,
  postItem,
};
