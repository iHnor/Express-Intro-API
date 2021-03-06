const router = require('express').Router()

const controller = require('../controllers/taskController');

function read() {
    router.get('/', function (req, res) {
        controller.collectToday()
            .then(data => {
                res.send(data);
            });
    });

}

read();

module.exports = router