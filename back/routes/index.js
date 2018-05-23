let express = require('express');
let router = express.Router();
const Elevators = require('../controllers/Elevators');

/* GET home page. */
router
    .route('/')
    .get(Elevators.find)
    .post(Elevators.create)
    .put(Elevators.update)

module.exports = router;
