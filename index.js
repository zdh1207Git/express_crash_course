const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const logger = require('./middlewares/logger');
const member_route = require('./routes/api/members.js');
const members = require('./Members');
// init middleware
app.use(logger);
// Handlebar Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// Homepage Route
app.get('/', (req, res) => res.render('index', {
  title: 'Member App',
  members
}));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', member_route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));