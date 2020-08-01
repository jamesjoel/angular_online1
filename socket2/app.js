var express = require("express");
var app = express();
var http = require("http"); // Core Module

var server = http.createServer(app);
var io = require("socket.io")(server);



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", (req, res)=>{
    res.render("index");
});
app.post("/", (req, res) => {
    res.render("index");
});
app.get("/chat", (req, res) => {
    res.render("chat");
});

// lcoalhost:3000/
// if <script file call>
// if <scriupt> var socket = io() </script>

io.on("connection", (socket)=>{
    console.log("connected");
    socket.on("send", function(recObj){
       io.emit("sendtoall", recObj);
    });   
});

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