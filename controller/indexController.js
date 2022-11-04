const fs = require("fs");
const path = require("path");

const indexController = {
    home: (req, res) => {
        res.render("index");
    },
    anillos: (req, res) => {
        res.render("products/anillos");
    },
    cadenas: (req, res) => {
        res.render("products/cadenas");
    },
    candongas: (req, res) => {
        res.render("products/candongas");
    },
    manillas: (req, res) => {
        res.render("products/manillas");
    },
    topitos: (req, res) => {
        res.render("products/topitos");
    },
    favoritos: (req, res) => {
        res.render("favoritos");
    },
    carrito: (req, res) => {
        res.render("carrito")
    }
};

module.exports = indexController;