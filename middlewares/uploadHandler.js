const multer = require('multer')
const path = require('path')

const PUBLIC_DIR = path.join(__dirname, '../public')
const UPLOAD_DIR = path.join(PUBLIC_DIR, 'uploads')

const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null, UPLOAD_DIR)
    },
    filename:(req,file,callback)=>{
        const id = Math.random()
        callback(null, id+path.extname(file.originalname))
    },
})

module.exports = multer({storage})