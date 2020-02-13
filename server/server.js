const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/images', (req, res) => {
  fs.readFile('server/images.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.patch('/api/images/:id', (req, res) => {
  const { id } = req.params;
  const { rate } = req.body;
  if (!rate) {
    res.status(400).send('No rate parameter');
    return;
  }
  fs.readFile('server/images.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
      return;
    }
    const images = JSON.parse(data);
    const newImages = images.map(i => {
      if (i.id === id) {
        return { ...i, rate };
      }
      return i;
    });
    fs.writeFile('server/images.json', JSON.stringify(newImages), error => {
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else {
        res.send('Ok');
      }
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
