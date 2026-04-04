const express = require('express')

const port = 5000

const app = express()

app.get('/',(req,res)=>{
  res.send('hello page p agaye ho tm')
})


app.get('/about',(req,res)=>{
  res.json({
    status: 800,
    data:[
      {name:'apple',},{name:'banan'}
    ],
    responseText :'success'
  })

  console.log('req---> ',req);
  
})



app.listen(port ,(req,res)=>{
  console.log(`server is running at ${port}`);
  
})
// http://localhost:5000/hello




// funcation adduser{
//  cost data =  fetch(http://localhost:5000/hello)

// }