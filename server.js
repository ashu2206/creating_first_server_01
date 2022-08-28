const http= require('http');
const port =8081;
http
.createServer((request,response)=>{

})
.listen(port,()=>{
    console.log(`Nodejs server started on port ${port}`);
});