const Review = require('../models/review')

const reviewData = [
    {
        id: 1,
        content: 'I had great RNG to pick up this up from a library in Busan. Excellent translation and rendition of the emotions and fervor that the characters would have felt.',
        rating: 5,
        user_id: 2,
        book_id: 1, 
    },
    {
        id: 2,
        content: 'Fantastic read, loved the big about Achilles and his rampages!',
        rating: 4,
        user_id: 4,
        book_id: 1
    },
    {
        id: 3,
        content: 'Without context, the most bizarre thing I have ever read. Still strange with it though, check page 50 for the description of Sin\'s birth',
        rating: 4,
        user_id: 3,
        book_id: 2
    },
    {
        id: 4,
        content: 'A fun book, jam packed with references and fun.',
        rating: 5,
        user_id: 1,
        book_id: 3        
    },
    {
        id: 5,
        content: 'a solid five out of seven, perfect score',
        rating: 5,
        user_id: 5,
        book_id: 3
    }
]

const seedReviews = () => Review.bulkCreate(reviewData);
module.exports = seedReviews;