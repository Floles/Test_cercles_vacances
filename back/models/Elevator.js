const mongoose = require('mongoose');
mongoose.connect('mongodb://cercle_vacances:toto@ds016138.mlab.com:16138/cercle_vacance');

const elevator = mongoose.model('elevator', {
     nom_etage: String,
     panneau: Number,
     immeuble: Number
    });

module.exports = elevator;