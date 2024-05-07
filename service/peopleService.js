const data = require('../data')

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


module.exports = {getPeople, getPeopleById, createPeople, deleteData, uploadImagePeople}