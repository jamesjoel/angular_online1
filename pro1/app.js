var express = require("express");
var app = express();

app.listen(3000, function(){ // .listen is used for cared a server with PORT
    console.log('server running');
});
/*
module.expores = function(){
    return {
        listen : function(a, b){
            return "hello";

            b();
        }
    };


}



*/

