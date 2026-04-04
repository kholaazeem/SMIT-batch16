const http = require('http')
const url = require ('url')


const ser = http.createServer((req,res)=>{
  
  console.log('url----> ', req.url);
  if(req.url == '/'){
    res.end('hello from home')
  }
  else{
     res.end('sorry not found')
  }
  
  
})




ser.listen(8000,'127.0.0.1',(req,res)=>{
   console.log('server is runninsdfsdfsdfg as sdufhskdbbc vb');
   
})