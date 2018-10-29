const path = require('path');
const express = require('express');

const PORT = 3000;
const HOST = '::';

const app = express();

app.use(express.static(__dirname));


app.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/index.html'));

});


app.listen(PORT, HOST, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = app;
