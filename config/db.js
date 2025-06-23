// here database connection is established
const mongoose = require('mongoose');
const config = require('./config');
const dbURI = config.dbURI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error:', err));
  