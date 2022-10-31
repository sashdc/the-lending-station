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
        title: 'Cicero: The Life and Times of Rome\'s Greatest Politician',
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
    {
        id: 5,
        title: 'Lord of the Flies',
        year: 1954,
        author: 'William Golding',
        isbn: 9780399501487,
        synopsis: 'The story of a group of young boys who find themselves alone on a deserted island.',
        rating: 3.5,
        available: false,
        available_next: next,
        borrowed_user: null,
        cover_link: 'placeholder'
    }, 
    {
        id: 6,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        year: 1997,
        author: 'J. K. Rowling',
        isbn: 9780439708180,
        synopsis: 'It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby',
        rating: 4.8,
        available: false,
        available_next: next,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 7,
        title: 'The old man and the sea',
        year: 1952,
        author: 'Ernest Hemingway',
        isbn: 684801221,
        synopsis: 'It is the story of an epic struggle between an old, seasoned fisherman Santiago and his life\'s greatest catch of fish.',
        rating: 4.2,
        available: true,
        available_next: today,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 8,
        title: 'Patterns for Beginning Programmers',
        year: 2022,
        author: 'David Bernstein',
        isbn: 9798713802226,
        synopsis: 'Programming patterns are solutions to problems that require the creation of a small fragment of code that will be part of a larger program.',
        rating: 4,
        available: true,
        available_next:today,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 9,
        title: 'Brave New World',
        year: 1932,
        author: 'Aldous Huxley',
        isbn: 9780060850524,
        synopsis: 'The novel examines a futuristic society, called the World State, that revolves around science and efficiency.',
        rating: 4.5,
        available: false,
        available_next: next,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 10,
        title: 'Verity',
        year: 2020,
        author: 'Colleen Hoover',
        isbn: 978140872660,
        synopsis: 'Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime.',
        rating: 4.4,
        available: false,
        available_next: next,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 11,
        title: 'The Wind in the Willows',
        year: 2000,
        author: 'Kenneth Grahame, Helen Ward',
        isbn: 9781552670040,
        synopsis: 'The tales relate the adventures of several animal friends and neighbours in the English countryside.',
        rating:5,
        available: false,
        available_next: next,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 12,
        title: 'Just Me and My Dad',
        year: 1977,
        author: 'Mercer Mayer',
        isbn:9780307118394,
        synopsis: 'Little Critter is exploring the great outdoors with his dad in this heartwarming and funny classic.',
        rating:5,
        available: true,
        available_next: today,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 13,
        title: 'Good Night, Dora!',
        year: 2002,
        author: 'Christine Ricci',
        isbn:9780449817810,
        synopsis: 'It\'s almost bedtime, and Dora and Boots are heading home. Along the way they hear some animal sounds..',
        rating:4.8,
        available: true,
        available_next: today,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 14,
        title: 'Cracking the Coding Interview',
        year: 2015,
        author: 'Gayle Laakmann McDowell',
        isbn:984782869,
        synopsis: 'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck.',
        rating:4.7,
        available: false,
        available_next: next,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
    {
        id: 15,
        title: 'The Little Prince',
        year:  1943,
        author: ' Antoine de Saint-Exupéry',
        isbn:9780156012195,
        synopsis: 'The Little Prince is an honest and beautiful story about loneliness, friendship, sadness, and love.',
        rating:4.3,
        available:  false,
        available_next: next,
        borrowed_user: null,
        cover_link: 'placeholder'
    },
  
]

const seedBooks = () => Book.bulkCreate(bookData);
module.exports = seedBooks;