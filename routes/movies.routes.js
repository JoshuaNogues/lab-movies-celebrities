const router = require("express").Router();
const express = require('express');
const mongoose = require ('mongoose');
const Movie = require('../models/Movie.model');

router.get('/id:', (req, res, next) => {
    Movie.findById(req.params.id)
    .populate('cast')
    .then((foundMovie) => {
        console.log(foundMovie)
        res.render('movie.hbs', foundMovie)
    })
    .catch((err) => {
        console.log(err)
    })
});

module.exports = router;