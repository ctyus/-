const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', `*`);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/comic', require('./Comic/comic'));

app.listen(81, () => {
  console.log('Example app listening on port 81!');
});

//Run app, then load http://localhost:81 in a browser to see the output.