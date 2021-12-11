const express = require("express");
const https = require('https');

const app = express();

app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=1887205bb71379a7f1eb341091449b7e&units=metric";

    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            res.write("<h1> The Current Temperature of Karachi is " + temp + " degrees. </h1>");
            res.write ("<h6> The Weather Currently has " + description +"</h6>");
            res.send();
        })
    })

});



app.listen("3000",function(){
    console.log("Port working!");
})