const request = require('request');
const bodyParser = require('body-parser');
const express = require('express');
const https = require("https");

const app = express()
port = 3000


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post('/', function(req, res){
  var firstName = req.body.fName;
  var lastName =  req.body.lName;
  var email =  req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }

      }
    ]
  }

  var jsonData = JSON.stringify(data);

   url = "https://us13.api.mailchimp.com/3.0/lists/1c884389e8";

      // url = "https://us13.api.mailchimp.co84389e8";


   options = {
    method: "POST",
    // auth: "TOnyDOGGYDODD:4801a996168defbded3c747a"
    auth: "TOnyDOGGYDODD:4801a996168defbded3c747abc9e606a-us13"
  }

   const request = https.request(url, options, function(response){


     if (response.statusCode === 200) {
       res.sendFile(__dirname + "/success.html");
     }
     else{
       res.sendFile(__dirname + "/failure.html");
     }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});


// app.post("/failure", function(req, res){
//   res.redirect("/");
// });
// app.post("/success", function(req, res){
//   res.redirect("/");
// });


app.post("/reTry", function(req, res){
  res.redirect("/");
});



app.listen(process.env.PORT || 3000, function(){
  console.log("Server is Running!");
});


// 4801a996168defbded3c747abc9e606a-us13

// user id
// 1c884389e8
