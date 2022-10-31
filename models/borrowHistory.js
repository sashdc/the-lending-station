const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class BorrowHistory extends Model {}

BorrowHistory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            onDelete: 'CASCADE'
        },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
          book_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'book',
              key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'borrowHistory',
    }
);

module.exports = BorrowHistory