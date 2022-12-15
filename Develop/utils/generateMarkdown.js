function renderLicenseBadge(license) {
  if(license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if(license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if(license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
}
function renderLicenseLink(license) {
  if(license == "MIT") {
    return "[![License: MIT](https://opensource.org/licenses/MIT)"
  }
  if(license == "Apache") {
    return "[![License](https://opensource.org/licenses/Apache-2.0)"
  }
  if(license == "IBM") {
    return "[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)"
  }
}
function renderLicenseSection(license) {
  if(license == 'MIT')
  return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.`
  if(license == 'Apache')
  return `THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  if(license == 'IBM')
  return `"Contributor" means IBM and any other entity that distributes the Program.`
}
function generateMarkdown(answers) {
  return `
  ${renderLicenseBadge(answers.license)}
  # ${answers.title}

  ## Description
  ${answers.description}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${renderLicenseLink(answers.license)}

  ## GitHub
  ${answers.github}

  ## Email Address
  ${answers.email}

  ## Section
  Link: ${renderLicenseSection(answers.license)}
  `
}

module.exports = generateMarkdown;
