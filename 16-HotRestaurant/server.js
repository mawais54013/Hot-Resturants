var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3070;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var guest = [
    {
        customerName: "Farley",
        customerEmail: "farfar@example.com",
        customerID: "farfarWittles",
        phoneNumber: "000-000-0000"
    },
    {
        customerName: "Sasha",
        customerEmail: "Sasha@gmail.com",
        customerID: "SaSHa",
        phoneNumber: "000000"
    },
    {
        customerName: "Azzy",
        customerEmail: "azzy@gmail.com",
        customerID: "landOfAzz",
        phoneNumber: "33333"
    },
    {
        customerName: "Kevin",
        customerEmail: "kevin@gmail.com",
        customerID: "Kevster",
        phoneNumber: "55555"
    },
    {
        customerName: "Laura",
        customerEmail: "laura@gmail.com",
        customerID: "Lauralee",
        phoneNumber: "898989"
    }
];

app.get("/", function(req,res)
{
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function(req,res)
{
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req,res)
{
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/guest", function(req,res)
{
    return res.json(guest);
});

app.post("/api/guest", function(req, res)
{
    var newGuest = req.body;

    // newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();

    console.log(newGuest);
    guest.push(newGuest);

    res.json(newGuest);
});

app.listen(PORT, function()
{
    console.log("App listening on PORT: " + PORT);
});
