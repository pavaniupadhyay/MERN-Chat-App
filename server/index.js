const express = require ('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./routs/AuthRouter');
require('dotenv').config();
require('./models/db');
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT',"PATCH", 'DELETE'],
  credentials:true,
}));
app.use('/auth', AuthRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})