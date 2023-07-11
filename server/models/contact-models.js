// модель контакта

const { Model, Sequelize, Op } = require("sequelize");
const { sequelize } = require("../config/db");

class Contact extends Model {}
Contact.init({
    id_contact: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },

    name_contact: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    is_favorite: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false
    }
    
}, {
    sequelize: sequelize,
    modelName: 'contact'
});

Event.searchAll = async function (query) {
    whereStatement = {[Op.and]: []};

    if (query.name_contact) {
        whereStatement[Op.and].push({
            name: {
                [Op.like]: `%${query.name}%`
            }
        });
    }

    const result = await this.findAll({
        where: whereStatement
    });

    const responseData = {
        status: Boolean(result),
        data: result,
    };

    return responseData;
};

module.exports = { Contact };