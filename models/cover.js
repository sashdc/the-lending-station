const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Cover extends Model {}

Cover.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      onDelete: 'CASCADE'
    },
    content: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'book',
            key: 'id'
        }
    }, 
    mimetype: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'cover',
  }
);

module.exports = Cover;
