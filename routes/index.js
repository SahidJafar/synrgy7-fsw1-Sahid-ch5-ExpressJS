const router = require('express').Router()
const PeopleRouter = require('./peopleRouter')
const ViewRouter = require('./viewRouter')

router.use('/people', PeopleRouter)
router.use('/views', ViewRouter)

module.exports = router