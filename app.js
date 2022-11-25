const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static("public"));

app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/babbage',(req, res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')))
app.get('/bernes-lee',(req, res) => res.sendFile(path.join(__dirname, 'views', 'bernes-lee.html')))
app.get('/clarke',(req, res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')))
app.get('/hamilton',(req, res) => res.sendFile(path.join(__dirname, 'views', 'hamilton.html')))
app.get('/hopper',(req, res) => res.sendFile(path.join(__dirname, 'views', 'hopper.html')))
app.get('/lovelance',(req, res) => res.sendFile(path.join(__dirname, 'views', 'lovelance.html')))
app.get('/turing',(req, res) => res.sendFile(path.join(__dirname, 'views', 'turing.html')))
app.get('/*',(req, res) => res.sendFile(path.join(__dirname, 'views', 'error404.html')))

app.listen(port, () => console.log(`Levantado el servidor en puerto ${port}`))
