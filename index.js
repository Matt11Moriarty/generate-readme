//packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

let validate = (val) => {
    return val ? true : 'I need a valid answer to continue'
}

//questions array used for inquirer 
const questions = [
    {
        type: 'input',
        message: "What is the title?",
        name: 'title',
        validate: (value) => validate(value)
    },
    {
        type: 'input',
        message: "Describe your application.",
        name: 'description',
        validate: (value) => validate(value)
    },
    {
        type: 'input',
        message: "What are the installation instructions?",
        name: 'installation',
        validate: (value) => validate(value)
    },
    {
        type: 'input',
        message: "What is the usage information?",
        name: 'usage',
        validate: (value) => validate(value)
    },
    {
        type: 'input',
        message: "What are the contribution guidelines?",
        name: 'contribution',
        validate: (value) => validate(value)
    },
    {
        type: 'input',
        message: "What are the test instructions?",
        name: 'tests',
        validate: (value) => validate(value)
    },
    {
        type: 'list',
        message: "What license are you using?",
        name: 'license',
        choices: [
            {
                name: "None",
                value: null
            },
            {
                name: "MIT",
                value: {
                    name: "MIT",
                    url: "https://img.shields.io/badge/License-MIT-yellow.svg",
                    badgeUrl: "https://opensource.org/licenses/MIT",
                    textUrl: '[MIT](https://www.mit.edu/~amini/LICENSE.md)'
                }
            },
            {
                name: "Apache-2.0",
                value: {
                    name: "Apache-2.0",
                    url: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
                    badgeUrl: "https://opensource.org/licenses/Apache-2.0",
                    textUrl: "[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)"
                }
            },
            {
                name: "Boost Software License 1.0",
                value: {
                    name: "Boost Software License 1.0",
                    url: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
                    badgeUrl: "https://www.boost.org/LICENSE_1_0.txt",
                    textUrl: '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)'
                }
            },
        ],
        validate: (value) => validate(value)
    },
    {
        type: 'input',
        message: "Enter your Github username.",
        name: 'username',
        validate: (value) => validate(value)
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: (value) => validate(value)
    }
];




//writeToFile function to generate README
function writeToFile(fileName, data) {
    let filePath = path.resolve(`${__dirname}/new_readme`, fileName)
    fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log('Readme successfully generated 👍');
    }
    )
}

//initializes the app and runs the inquirer function
function init() {
    inquirer.prompt(
        questions
    )
        .then((answers) => {
            let markdownData = generateMarkdown(answers)
            writeToFile('newReadMe.md', markdownData);
        })
          .catch((error) => {
            if (error.isTtyError) {
              console.log('Can\'t be rendered');
            } else {
              console.log('Something went wrong');
            }
          })
        ;
}

init();
