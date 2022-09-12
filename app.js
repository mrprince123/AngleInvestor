const experss = require('express');
const hbs = require('hbs')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const routes = require('./src/routes/main');


const app = experss();
app.use(bodyparser.urlencoded({ extended: true }));

app.use(experss.static("public"));
app.use("/", routes);

// Templet engine
app.set('view engine', 'hbs');
app.set('views', 'views');

hbs.registerPartials("views/partials");

app.get("/", function (req, res) {
    res.send("<h1>Server is running</h1>")
});


app.listen(3000, function () {
    console.log("Server is running on the port 3000");
});