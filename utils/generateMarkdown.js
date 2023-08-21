//block of functions which alter the readme output based on whether or not a license was selected
function renderLicenseBadge(license) {

  return license ? `[![License](${license.url})](${license.badgeUrl})` : "";
}

function renderLicenseLink(license) {
  return (license === 'None') ? '' : '- [License](#license)';
}

function renderLicenseSection(license) {
  return license ? `
  ## License
This application is covered by the ${license.name} license.
\nMore infomation can be found here: ${license.textUrl}
  ` : "";
}


//function to return readme text
function generateMarkdown(data) {
  return `
# ${data.title}
## Description
${data.description}

${renderLicenseBadge(data.license)}
  
## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
${renderLicenseLink(data.license)}
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
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
