const port = (process.env.PORT || 3000);
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log("entered endpoint")
  let responseMessage = process.env.RESPONSE_MESSAGE || "Hello!!!";
  res.send(responseMessage);
});

app.listen(port);