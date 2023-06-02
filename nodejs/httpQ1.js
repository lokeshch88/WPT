//import library

const http=require('http')
const fs= require('fs')
const url= require('url')
const op=require('./opmodule1') //user defined module

//create server

var server= http.createServer(function(req,resp){
    //parse the url --- separate url and data
    var q= url.parse(req.url,true);
    resp.writeHeader(200, {"content-type":"text/html" });

    //handle all urls
    switch(q.pathname){
        case "/form":
            var rs= fs.createReadStream("./public/form1.html");
            rs.pipe(resp);
            //resp.end();
        break;
        case "/submit-data":
                var n1=parseInt(q.query.num1);
                var n2=parseInt(q.query.num2);

                if(q.query.btn==="add"){
                    var ans=op.add(n1,n2);
                    resp.write("Addition: "+ans);
                }else if(q.query.btn==="sub"){
                    var ans=op.substract(n1,n2);
                    resp.write("Substraction: "+ans);
                }else if(q.query.btn==="multi"){
                    var ans=op.multi(n1,n2);
                    resp.write("Multiplication: "+ans);
                }else if(q.query.btn==="div"){
                    var ans=op.div(n1,n2);
                    resp.write("Division: "+ans);
                }else if(q.query.btn==="square"){
                    var ans=op.square(n1,n2);
                    resp.write("Square: "+ans);
                }
                else{
                    var ans=op.sum(n1,n2);
                    resp.write("Sum: "+ans);
                }
                
            break;
            default:
             resp.write("welcopme");
             resp.end("visit/form url")
    }
    

})
server.listen(3011,function(){
console.log("server started at port 3011")
})
