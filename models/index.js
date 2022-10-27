const User = require('./user')
const Book = require('./book')
const Review = require ('./review')

User.hasOne(Book, {
    foreignKey: 'borrowed_user',
});

User.belongsTo(Book, {
    foreignKey: 'borrowed_book'
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Book.belongsTo(User, {
    foreignKey: 'borrowed_user'
    //set null if user is deleted
});

Book.hasOne(User, {
    foreignKey: 'borrowed_book',
});

Book.hasMany(Review, {
    foreignKey: 'book_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(Book, {
    foreignKey: 'book_id',
    onDelete: 'CASCADE',
});

module.exports = {User, Book, Review}