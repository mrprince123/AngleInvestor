const experss = require('express');
const routes = experss.Router();


routes.get("/", async (req, res) => {
    res.render("index");
});


module.exports = routes;