const http=require('http');
const fs=require('fs');
const url=require('url');
const op=require('./mymoduleq2');

const server= http.createServer(function(req,resp){
    var u=url.parse(req.url,true);

    resp.writeHeader(200, {"content-type":"text/html" });

    switch(u.pathname){
        case "/form":
            var rs=fs.createReadStream("./public/form2.html")
            rs.pipe(resp);
        break;

        case "/submit-data":
            var n=parseInt(u.query.num1);
            if(n<5){
                var ans=op.fact(n);
                resp.write("factorial: "+ans);
            }else if(n>5 && n<10){
                var ans=op.table(n);
                resp.write("table:" +ans);
            }else{
                var ans=op.myprime(n)
                resp.write(ans);
            }

        break;

        default:
            resp.write("welcome \n");
            resp.end("visit/form url")
    }

})

server.listen(3003,function(){
    console.log("server started at 3003")
})