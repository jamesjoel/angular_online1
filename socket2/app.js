var express = require("express");
var app = express();
var http = require("http"); // Core Module
var bodyParser = require("body-parser");
var server = http.createServer(app);
var io = require("socket.io")(server);
var cookieParser = require("cookie-parser");
var session = require("express-session");

var arr = [];

var obj={};
var name="hello";
var request;
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret : "hello"}));
app.get("/", (req, res)=>{
    res.render("index");
});
app.post("/", (req, res) => {
    // console.log(req.body);
    req.session.chatname=req.body.name;


    // arr.push(req.body);
    res.redirect("/chat");
});
app.get("/chat", (req, res) => {
    request = req;
    // arr.push(obj);
    // console.log(arr);
    res.render("chat");
    
    // console.log(usersocket);
});
io.on("connection", (socket) => {
    console.log(request.session);
    obj.socketid = socket.id;
    // result = JSON.search(arr, '//*[name="'+request.session.name+'"]');
    if(name =="hello"){
        obj.name = request.session.chatname;
        name = request.session.chatname;
        arr.push(obj);
        
    }
    console.log(arr);
    io.emit("onlineUser", arr);
    obj={};

});
// lcoalhost:3000/
// if <script file call>
// if <scriupt> var socket = io() </script>



//    console.log("hello world *************", socket.id);
//     socket.on("disconnect", function(){
//     console.log("this client is DISCONNECTED", socket.id);
//    });








server.listen(3000, ()=>{
    console.log("server running");
});




/*

socket.on("key", function(data){
    console.log(data);
})




socket.broadcast.emit("key", "value");  
    send to all connected client except sender


 socket.emit("key", "value")
    send to sender client only 
    
io.emit("key", "value")
    send to all connected client including sender

 io.on(socket.id).emit()
    sending to ind client   

*/