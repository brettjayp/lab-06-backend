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

app.get('/bad', (request, response) => {
  response.send('OOps, this is THE bad route')
})

app.get('/home', (request, response) => {
  response.send('Home Page number 2!');
})

app.get('/about', aboutUsHandler);

function aboutUsHandler(request, response) {
  response.status(200).send('About us page');
}


//Ensure the server is listening for request
//THIS MUST BE AT THE END OF THE FILE!!!
app.listen(PORT, () => console.log(`Server up on port ${PORT}`));