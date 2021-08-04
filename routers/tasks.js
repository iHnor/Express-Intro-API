const router = require('express').Router()
const controller = require('../controllers/taskController')

function read() {

    router.get('/', function (req, res) {
        let showAll = controller.findAll()
        res.send(showAll)
    });

    router.get('/:id', function (req, res) {
        let showSingle = controller.findSingle(req.params.id)
        res.send(showSingle)
    });
}

function write() {

    router.post('/', function (req, res) {
        let newPost = controller.addNewPost(req.body)
        res.send(newPost)
    });

    router.patch('/:id', function (req, res) {
        let update = controller.updateTask(req.params.id, req.body)
        res.send(update)
    });

    router.delete('/', function (req, res) {
        let del = controller.deleteTask()
        res.send(del);
    });

}

function crud() {
    read();
    write();
}

crud();

module.exports = router;