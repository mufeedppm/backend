const http= require('http');

const server = http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.write('<html><header><title>home page</title></header><body>Welcome home</body></html>')
    }
    else if(req.url=='/about'){
        res.write('<html><header><title>about us</title></header><body>Welcome to About Us</body></html>')
    }
    else if(req.url=='/node'){
        res.write('<html><header><title>node js</title></header><body>Welcome to my Node js Project</body></html>')
    }
    
      
});


server.listen(4000);



