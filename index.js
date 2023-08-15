// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    "What is the title?",
    "Describe your application.",
    "What are the installation instructions?",
    "What is the usage information?",
    "What are the contribution guidelines?",
    "What are the test instructions?",
    "What license are you using?"
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
        },
        {
            type: 'list',
            message: questions[6],
            name: 'license',
            choices: [
                "None",
                "MIT",
                "Apache-2.0",
                "GNU GPLv3",
                "BSD-3-Clause",
                "ISC",
                "Mozilla Public License 2.0"
            ],
            validate: (value) => { return value ? true : 'Please select one of the options.' }
        }
    ]
  )
  .then((answers) => {
    console.log(answers);
    let markdownData = generateMarkdown.generateMarkdown(answers)
    writeToFile('NewReadMe.md', markdownData);
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log('Can\'t be rendered');
//     } else {
//       console.log('Something went wrong');
//     }
//   })
  ;


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let filePath = path.resolve(`${__dirname}/new_readme`, fileName)
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log('Saved!');
      }
      )
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
