const ToDO = require('../models/models');

class TaskController {

    findAll() {
        return ToDO.findAll();
    }

    findList(listId) {
        return ToDO.findList(listId);
    }

    findTask(taskId, listId) {

        return ToDO.findTask(taskId, listId);
    }

    addNewPost(listId, newTask) {
        return ToDO.createTask(listId, newTask);
    }

    updateTask(taskId, listId, NewUpdateTask) {

        return ToDO.update(taskId, listId, NewUpdateTask);
    }

    changeTask(taskId, listId, newTask){

        return ToDO.changeTask(taskId, listId, newTask)
    }

    deleteList(listId) {

        return ToDO.deleteList(listId)
    }
}

module.exports = new TaskController()