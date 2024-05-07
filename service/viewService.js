const data = require('../data')

const getPeople = (req, res) => {
    res.render('index', { data: data.data });
}

module.exports = {getPeople}