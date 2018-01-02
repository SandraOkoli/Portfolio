// Mongoose + mongoose promise
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

//Require models
const Admin = require('../models/admin');
const Project = require('../models/project');

Admin.collection.drop();
Project.collection.drop();


Admin
  .create([{
    username: 'admin',
    email: 'admin@admin.com',
    password: 'password2018',
    passwordConfirmation: 'password2018'
  }])
  .then(admin => {
    console.log(`${admin.length} admin created`);

    return Project
      .create([{
        title: 'Muse',
        description: 'For my final project I decided to create a fully authenticated RESTFUL platform which connects aspiring artists, songwriters and producers. ',
        image: 'http://fillmurray.com/200/200',
        technology: 'I used React , React-DOM and Axios to build out the front end of my application and Node.js and Express to build the back end. As the main aspect of my app is to connect creatives online, I decided to implement the Mongoose friends plugin to create friend requests. I created a controller using the friends plugin with the provided methods to view all friends, accept, reject and create pending requests. I also used websockets to create instant messages to users to interact with their friends. I decided to add extra functionality to enable users to filter via type, genre, location and skill level.',
        category: 'React'
      },{
        title: 'The Counted',
        description: 'In an agile environment, we chose to highlight a more serious issue, the police shootings in the US.',
        image: 'http://fillmurray.com/200/200',
        technology: 'The project uses a third party API The Counted which returns data from US police shootings and Google Maps API to plot the results on a heat map. I was tasked with setting up the backend via Ruby and implementing the library HTTParty to handle HTTP API requests to the Counted API.',
        category: 'Ruby on Rails'
      },{
        title: 'Out?',
        description: 'For our group project we decided to build an application that plans your night out.',
        image: 'http://fillmurray.com/200/200',
        technology: 'In this project we used the MEAN stack (Mongo, Express, Angular, Node.js) and SCSS. Users are able to create an event by searching for a location via Google Maps and Google Places or join an event and interact with other attendees via comments. I was tasked with testing (using Mocha, Chai and Istanbul), creating and implementing the comments functionality, created two of the RESTful routes and styled the show page.'
      },{
        title: 'GA Yearbook',
        description: 'For this project I created a fully RESTful app with authentication. Users were able to login or register and add themselves to the yearbook and edit and delete their profile.',
        image: 'http://fillmurray.com/200/200',
        technology: 'I used BCrypt to create hashed passwords and Express jwt to generate tokens to authenticate users.'
      },{
        title: 'Slap a Doll',
        description: 'This project is a take on Whack a Mole which features the Kardashians. Users can select a Kardashian which they have to slap before the times out.',
        image: 'http://fillmurray.com/200/200',
        technology: 'I started off building out a simple 2 by 2 grid to get the basic functionality working using jQuery. To increase the intensity of the game I added extra functionality such as setting intervals and increased the grid size each time the number of user clicks was equal to the grid base.'
      }]);
  })
  .then(projects => {
    console.log(`${projects.length} projects created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
