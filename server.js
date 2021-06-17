let express = require('express');

let app = express();

let cors = require('cors');
const { json } = require('express');
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  console.log(req);
  res.send('{Baray}');
});
app.get('/names', (req, res) => {
  let obj = 'Bhavesh is a programmer';
  res.send(obj);
});
app.post('/names', (req, res) => {
  let obj = req.body;
  console.log(req.headers);
  console.log(req.method);
  console.log(req.body);
  if (obj.isCeoOfCodigo) {
    res.send({ ...obj, secretMessage: 'Welcome sir Bhavesh!!' });
    return;
  }
  let newData = { chaltay: true, name: 'Bhavesh' };
  res.send(newData);
});

// app.get('/datta', (req, res) => {
//     res.send({});
// })

// app.post('/save', (req, res) => {
//     const obj = req.body;
//     if (obj.name === 'atharva') res.send({ Error: "Bad Name", Fix: "Enter a better name! " })
//     console.log(obj)
//     res.send(obj)

// })

app.listen(5000, () => {
  console.log('Listening on 5000');
});
