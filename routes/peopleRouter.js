const router = require('express').Router()
const { getPeople, getPeopleById, createPeople, deleteData, uploadImagePeople } = require('../service/peopleService')
const upload = require('../middlewares/uploadHandler')

const idChecker = (req, res, next) => {
    const { id } = req.params
    const newId = +id

    if (newId > 0) {
        next(); // Lanjutkan jika ID valid
    } else {
        res.status(400).json({ message: 'ID Tidak Valid' });
    }
}

router.get('/', getPeople)
router.get('/:id', idChecker, getPeopleById)
router.post('/create', createPeople)
router.delete('/delete/:id', idChecker, deleteData)
router.post('/upload', upload.single('image'), uploadImagePeople)

module.exports = router