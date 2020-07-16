var express = require("express");
var app = express(); // calling a express constructor

// app.listen(3000, function(){ // ES5
//     console.log("server running");
// })

// create your route and its running file
// localhost:3000/home
// localhost:3000/about
// localhost:3000/contact

app.get("/", (req, res)=>{ // "/home" is our url
    // res.send("<h1>hello world</h1>");
    var a = "rohit";
    res.sendFile(__dirname+"/home.html");
});
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
});





app.listen(3000, ()=>{ // ES6

    // console.log(__dirname);
    console.log("server running");
});
// localhost/project/home.php

/*
    res.send() ------------- Only Send Data to Client
    res.sendFile()---------- Only Send HTML File to Client
    res.render()------------ Send File and Data Both
    res.redirect()---------- Call to another url like header() in PHP




JS --- is not a Templateing language

demo.js




<script src="demo.js"></script>





Templating Langulage
 .php

 <html>
 <body>
    <?php ?>

 </body>









*/