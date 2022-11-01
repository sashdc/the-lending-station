const User = require('./user')
const Book = require('./book')
const Review = require('./review')
const BorrowHistory = require('./borrowHistory')
const Cover = require('./cover')

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.belongsToMany (Book, {
    through: {
        model: BorrowHistory,
        foreignKey: 'user_id',
        unique: false
    }
});

Book.belongsTo(User, {
    foreignKey: 'borrowed_user',
    //set null if user is deleted
    onDelete: 'CASCADE'
});

Book.hasMany(Review, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE',
});

Book.hasOne(Cover, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(Book, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE',
});

Cover.belongsTo(Book, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE'
});

module.exports = {User, Book, Review, BorrowHistory, Cover}