const request = require('request');
const bodyParser = require('body-parser');
const express = require('express');

const app = express()
const port = 3001

app.listen(3000, function(){
  console.log("Server is Running!");
})
