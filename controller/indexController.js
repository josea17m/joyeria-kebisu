const fs = require("fs");
const path = require("path");

const indexController = {
    home: (req, res) => {
        res.render("index");
    }
};

module.exports = indexController;