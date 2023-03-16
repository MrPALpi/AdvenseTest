const Router = require('express');
const router = new Router();
const EventController = require('../controllers/eventsController');
router.post('/',EventController.create)
router.get('/',EventController.getAll)
router.put('/update',  EventController.updateState)
router.delete('/delete', EventController.deleteEvent)

module.exports = router