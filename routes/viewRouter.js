const router = require('express').Router()
const { getPeople} = require('../service/viewService')

router.get('/people', getPeople)

module.exports = router