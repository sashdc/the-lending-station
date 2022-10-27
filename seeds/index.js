const seedUsers = require('./user');
const seedBooks = require('./book');
const seedReviews = require('./review');
const seedbHistory = require('./borrowHistory')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedBooks();
    console.log('\n----- BOOKS SEEDED -----\n');
  
    await seedReviews();
    console.log('\n----- REVIEWS SEEDED -----\n');

    await seedbHistory();
    console.log('\n----- BORROW HISTORY SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();