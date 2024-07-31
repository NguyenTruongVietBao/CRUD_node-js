const hbs  = require('express-handlebars');
const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route
const route = require('./routes')
//db
const db = require('./config/db')
db.connect(); // connect db

//PUT POST DELETE ...
app.use(methodOverride('_method'))

//template engine
app.engine('hbs', hbs.engine({
   extname: '.hbs',
   helpers: {
      countIndex: (a, b) => a + b
   } 
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')))

route(app);

app.listen(3000, () => console.log('http://localhost:3000'))