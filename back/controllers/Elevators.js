const Elevator = require ('../models/Elevator');

const Elevators = {
    find : (req, res) => {
        Elevator
        .find()
        .then(result => (res.send(result)))
    },
    create : (req, res) => {
        Elevator
        .create({
            nom_etage: req.body.nom_etage,
            panneau: req.body.panneau,
            immeuble: req.body.immeuble
        })
        res.end();
    },
    update : (req, res) => {
        Elevator
        .findOneAndUpdate({nom_etage: req.body.nom_etage},{panneau: req.body.panneau},
        (err, elevator, result) => {
            res.end();
        });
    }
}

module.exports = Elevators;