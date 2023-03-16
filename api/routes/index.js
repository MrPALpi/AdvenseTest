const Router = require('express');
const router = new Router();
const eventRouter = require('./eventsRouter')
const userRouter = require('./userRouter')


router.use('/user',userRouter)
router.use('/events',eventRouter)


module.exports = router