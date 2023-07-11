// контроллер контактов

const { Contact } = require('../models/contact-models');
const {v4: uuidv4} = require('uuid');

const createContact = async (req, res) => {
    const id_contact = uuidv4();
    try {
        await Contact.create({
            id_contact: id_contact,
            name_contact: req.body.name_contact,
            phone: req.body.phone,
            image: req.body.image,
            is_favorite: req.body.is_favorite      //?
        })
        res.status(200).send({status: true});
    } catch(err) {
        console.log(err);
        res.status(500).send({status: false});
    }
}

const toFavorite = async (req, res) => {
    try {
        const contact = await Contact.findByPk(req.params.id_contact);
        if (contact) {
            await Contact.update({
                is_favorite: req.body.is_favorite
            },
            {
                where: { id_contact: req.params.id_contact }
            });
            res.status(200).send({ status: true });
        } else {
            res.send({ status: false });
        }
    } catch (err) {
        res.status(500).send({ status: false });
    }
}

const deleteContact = async (req, res) => {
    try {
        const result = await Contact.destroy({
            where: {
                id_contact: req.params.id_contact
            }
        });
        
        res.status(200).send(JSON.stringify({status: Boolean(result)}, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

const getAll = async (req, res) => {
    try {
        contact = await Contact.findAll({
            order: [
                ['is_favorite', 'DESC'],
                ['name_contact', 'ASC']
            ]
        });
        const responseData = {
            status: true,
            data: contact,
        };
        res.status(200).send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

const searchContacts = async (req, res) => {
    try {
        responseData = await Contact.searchAll(req.query);
        console.log(responseData);
        res.status(200).send(JSON.stringify(responseData, null, 2));
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: false });
    }
}



module.exports = {createContact, deleteContact, getAll, searchContacts, toFavorite};