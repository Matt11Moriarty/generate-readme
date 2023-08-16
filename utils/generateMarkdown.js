// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  return license ? `[![License](${license.url})](${license.badgeUrl})` : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (license === 'None') ? '' : '- [License](#license)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license ? `
  ## License
This application is covered by the ${license.name} license.
\nMore infomation can be found here: ${license.textUrl}
  ` : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}

${renderLicenseBadge(data.license)}
  
## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

${renderLicenseSection(data.license)}

## Tests
${data.tests}

## Questions?
Github: ${data.username}

If you have any questions, please feel free to email me at ${data.email}

`;
}

module.exports = generateMarkdown;
