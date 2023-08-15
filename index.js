// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    "What is the title?",
    "Describe your application.",
    "What are the installation requirements?",
    "What is the usage information?",
    "What are the contribution guidelines?",
    "What are the test instructions?"
];

inquirer.prompt(
    [
        {
            type: 'input',
            message: questions[0],
            name: 'title',
            validate: (value) => { return value ? true : 'I need a valid answer to continue' }
        },
       {
            type: 'input',
            message: questions[1],
            name: 'description',
            validate: (value) => { return value ? true : 'I need a valid answer to continue' }
        }, 
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
            validate: (value) => { return value ? true : 'I need a valid answer to continue' }
        }, 
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
            validate: (value) => { return value ? true : 'I need a valid answer to continue' }
        }, 
        {
            type: 'input',
            message: questions[4],
            name: 'contribution',
            validate: (value) => { return value ? true : 'I need a valid answer to continue' }
        }, 
        {
            type: 'input',
            message: questions[5],
            name: 'test',
            validate: (value) => { return value ? true : 'I need a valid answer to continue' }
        }
    ]
  )
  .then((answers) => {
    console.log(answers);
    // writeToFile('ReadMe.md', answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Can\'t be rendered');
    } else {
      console.log('Something went wrong');
    }
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
