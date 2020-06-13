Project Instructions

As per the requirements of the project, a web tool has been set up using Aylien API that allows the user to use natural language processing (NLP). It will just if the article is positive, negative or neutral towards the topic that has been entered. Both Node and Express have been install to run the tools main functionality. Webpack has been used to create both the production and development servers. In Webpack, development and production environments will be set up for the app.

Running The Project

To Run Production
$ npm run build-prod

To Run Development 
$ npm run build-dev

Configurations
There are two web pack files, webpack.prod.js & webpack.dev.js for both of the files. There is also a package.json file to manage all of the dependencies for managing the tool. 

Offline Functuality
The project have service workers set up in webpack to provide the offline functionality.

Testing with Jest

Testing is done with Jest. To run test, use the command
$ npm run test