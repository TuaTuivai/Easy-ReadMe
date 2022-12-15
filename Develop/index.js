// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// const fs       = require('./utils/generateMarkdown')
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        {
            type:'input',
            message:'what was the title of this project?',
            name:'title'
        },
        {
            type:'input',
            message:'what is the decription of your project?',
            name:'description'

        },
        {
            type:'input',
            message:'what does your project do?',
            name:'usage'

        },
        {
            type:'input',
            message:'what is your github username?',
            name:'github'

        },
        {
            type:'input',
            message:'email address?',
            name:'email'

        },
        {
            type: 'list',
            message: "Which license would you like to apply?",
            name: 'license',
            choices: [
                "MIT",
                "Apache",
                "IBM"
            ]
        },
    ])
    .then((answers) => {
        var generatedReadme = generateMarkdown(answers)
        // console.log(generatedReadme);


        fs.writeFile("Sample.md", generatedReadme, function() {
            console.log("Readme successfully created!")
        })
    });




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
