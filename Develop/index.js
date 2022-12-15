const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
inquirer
    .prompt([
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
       
        fs.writeFile("Sample.md", generatedReadme, function() {
            console.log("Readme successfully created!")
        })
    });





function writeToFile(fileName, data) {}


function init() {}


init();
