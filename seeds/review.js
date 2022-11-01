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
    },
    {
        id: 6,
        content: 'How the mighty have fallen. Like the LPL /s',
        rating: 5,
        user_id: 5,
        book_id: 3
    },
    {
        id: 7,
        content: 'I am really fascinated and dumbfounded by J.K. Rowling\'s imagination and creativity.',
        rating: 4.8,
        user_id: 3,
        book_id: 6
    },
    {
        id: 8,
        content: 'I personally enjoyed this book.It is interesting to learn about how awfully weird the characters are, how they think and act.',
        rating: 4.5,
        user_id: 1,
        book_id: 9
    },
    {
        id: 9,
        content: 'This book man. Tbh I thought it was a normal storyline at first but  later on the mystery.',
        rating: 4.4,
        user_id: 2,
        book_id: 10
    },
    {
        id: 10,
        content: 'So fun and whimsical!.',
        rating: 5,
        user_id: 4,
        book_id: 11
    },
    {
        id: 11,
        content: 'This translation is the apex, nay, the zenith, of what all other translations of ancient classics should be like. Bravo!',
        rating: 5,
        user_id: 2,
        book_id: 1, 
    },
    {
        id: 12,
        content: 'The absolute horridness of this book could raise the living dead.',
        rating: 1,
        user_id: 4,
        book_id: 1
    }
    
]

const seedReviews = () => Review.bulkCreate(reviewData);
module.exports = seedReviews;