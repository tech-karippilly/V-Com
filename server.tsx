var express = require('express');
var app = express();
const port = 9000;

app.get('/',(req,res)=>{
res.send('Helo World')
})



app.listen(port,()=>{
  console.log("connected to local host 8000");

});
