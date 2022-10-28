const Book = require ('../models/book')

let today = new Date()

let next = today.setDate(today.getDate() + 7)

const bookData = [
    {
        id: 1,
        title: 'The Iliad',
        year: 1999,
        author: 'Homer, Rober Fagles (translator)',
        isbn: 9780140275360,
        synopsis: 'A translation of the ancient poem featuring the waning year of the Trojan war',
        rating: 3.89,
        available: false,
        available_next: next,
        borrowed_user: 2,
        cover_link: 'placeholder'
    },
    {
        id: 2,
        title: 'Paradise Lost',
        year: 2005,
        author: 'John Milton',
        isbn: 9780486442877,
        synopsis: 'A 17th century epic depicting the fall of Lucifer and the eventual fall of Adam and Eve',
        rating: 4.5,
        available: false,
        available_next: next,
        borrowed_user: 3,
        cover_link: 'placeholder'
    },
    {
        id: 3,
        title: 'Ready Player One',
        year: 2011,
        author: 'Ernest Cline',
        isbn: 9780307887436,
        synopsis: 'In the year 2044 Wade Watts competes with millions of others for fame and fortune in a virtual world',
        rating: 4.24,
        available: true,
        available_next: today,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 4,
        title: 'Cicero: THe Life and Times of Rome\'s Greatest Politician',
        year: 2003,
        author: 'Anthony Everitt',
        isbn: 9780375758959,
        synopsis: 'A fantastic look at the life and times of the world\'s greatest statesman',
        rating: 4.6,
        available: false,
        available_next: next,
        borrowed_user: 5,
        cover_link: 'placeholder'
    },
    
]

const seedBooks = () => Book.bulkCreate(bookData);
module.exports = seedBooks;