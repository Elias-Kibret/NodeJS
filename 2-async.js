const http=require('http')
const server=http.createServer((req, res)=>{
   console.log('request event')
   
   if(req.url==='/'){
      res.end('Home Page')
   }
   if(req.url==="/About"){
      //BLOCKING CODE !!!

      res.end('About page')
   }
   if(req.url==="*")
   {
      res.end('')
   }
   res.end('Hello page')
   

})
server.listen(3000,()=>{
   console.log('server listening on port:3000')
})