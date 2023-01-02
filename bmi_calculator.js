const express = require("express");
const body_parser = require("body-parser");
const app = express();
app.use(body_parser.urlencoded({extended:true}));
app.listen(3000, function(){
    console.log("Server started on port 3000.");
});
app.get("/", function(request, response){
    response.sendFile(__dirname+"/bmi_calculator.html");
});
app.post("/", function(request, response){
    var weight = Number(request.body.weight);
    var height = Number(request.body.height);
    var bmi = weight / (height*height);
    response.send("Your BMI is:- "+bmi);
});

