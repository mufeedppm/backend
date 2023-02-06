const http= require('http');
const fs=require('fs');


const server = http.createServer((req,res)=>{
     const url=req.url;
     const method=req.method;
     if(url=="/"){
     fs.readFile("message.txt",{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log(err)
        }
        res.write('<html>')
        res.write('<header><title>home page</title></header>')
        res.write(`<body>${data}<form action="/message" method="POST"><input type="text" name="message" ><button type="submit">send</button></form></body>`)
        res.write('</html>')
        return res.end()
     })
     
     }
    if(method==='POST' && url==='/message'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk)
            console.log(body)
        });
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            const message=parsedBody.split("=")[1]
            fs.writeFile('message.txt', message,err =>{
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end();
            })
            
        })
        
    }
         
});


server.listen(3000);