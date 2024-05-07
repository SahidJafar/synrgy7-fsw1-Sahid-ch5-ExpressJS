const data = require('../data')
const cloudinary = require('../middlewares/cloudinary');

const getPeople = (req,res) =>{
    res.json({message:'Success', data})
}

const getPeopleById = (req, res) => {
    const { id } = req.params;
    const person = data.data.find((row) => row.id === id);

    if (person) {
        res.json({ message: 'Success', data: person });
    } else {
        res.status(404).json({ message: 'Person not found' });
    }
}

const createPeople = (req, res) => {
    const { name, username, email } = req.body;
    const newPerson = {
        id: data.data.length + 1,
        name,
        username,
        email
    };
    data.data.push(newPerson);
    res.json({ message: 'Person created successfully', data: newPerson });
}

const deleteData = (req, res) => {
    const { id } = req.params;
    const index = data.data.find((row) => row.id === id);

    if (index !== 0) {
        data.data.splice(index, 1);
        res.json({ message: 'Data deleted successfully' });
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
}

const uploadImagePeople = (req,res) =>{
    const url = `/uploads/${req.file.filename}`

    res.status(200).json({message: 'Uploaded!', url})
}

const cdnUploadImagePeople = (req,res) =>{
    const fileBase64 = req.file.buffer.toString('base64')
    const file = `data:${req.file.mimetype};base64,${fileBase64}`

    cloudinary.uploader.upload(file, (err, result)=>{
        res.status(200).json({message: 'Uploaded!', url:result.url})
    })
}


module.exports = {getPeople, getPeopleById, createPeople, deleteData, uploadImagePeople, cdnUploadImagePeople}