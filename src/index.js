import express from 'express';
import { engine } from 'express-handlebars';

const app = express()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = 12345

app.get('/', (req, res) => {
  res.send('Hello World huỳnh mai an phú 1234_ps19353')
})

app.get('/1', (req, res) => {
  res.render('home')
})
app.get('/2', (req, res) => {
  res.render('dientchi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})