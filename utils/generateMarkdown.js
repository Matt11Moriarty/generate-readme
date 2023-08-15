// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  switch (data.license) {
    case 'None':
      licenseText = 'Not licensed'
      licenseBadge = ''
      break;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      licenseText = `This application is coverd by the ${data.license} license.
      \nMore infomation can be found here: [MIT](https://www.mit.edu/~amini/LICENSE.md)`
      break;
    case 'Apache-2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      licenseText = `This application is coverd by the ${data.license} license.
      \nMore infomation can be found here: [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)`
      break;
    case 'Boost Software License 1.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      licenseText = `This application is coverd by the ${data.license} license.
      \nMore infomation can be found here: [Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`
      break;
    default:
      licenseText = 'License not selected'
      licenseBadge = ''
  }

  return `
# ${data.title}
## Description
${data.description}

${licenseBadge}
  
## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Credits
${data.credits}

## License
${licenseText}

## Tests
${data.tests}

## Questions?
github: ${data.username}

If you have any questions, please feel free to email me at ${data.email}

`;
}

module.exports = {
  generateMarkdown
};
