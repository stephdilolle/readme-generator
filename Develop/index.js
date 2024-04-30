// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter the title of your project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter the link to your GitHub profile and your email address:'
        }
    ]);
}

// TODO: Create a function to write README file
function generateReadmeContent(answers) {
    return `
# ${answers.projectTitle}

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions

${answers.questions}
`;
}

function writeToReadme(content) {
    fs.writeFile('README.md', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md file has been created!');
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await promptUser();
        const readmeContent = generateReadmeContent(userResponses);
        writeToReadme(readmeContent);
    } catch (error) {
        console.error(error);
    }
}

// Function call to initialize app
init();