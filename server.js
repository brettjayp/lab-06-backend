'use strict';

//load Envicronment variables from the .env
require('dotenv').config();

//Declare Application Dependancies
const express = require('express');
const cors = require('cors');

//Application Setup
const PORT = process.env.PORT;
const app = express ();
app.use(cors());
 
//route syntax = app.<operation>('<route>', callback );
app.get('/', (request, response) => {
  response.send('Home Page!');
});

//Ensure the server is listening for request
//THIS MUST BE AT THE END OF THE FILE!!!
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));