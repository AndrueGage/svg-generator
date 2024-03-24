const inquirer = require('inquirer');
const fs = require('fs'); 
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = () => {
    return inquirer.createPromptModule([
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters for your logo:',
            validate: input => input.length <= 3 ? true: 'Text must be three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color by keyword or hexadecimal:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose your shape:',
            choices: ['circle', 'triangle', 'sqaure'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter your shape color by keyword or hexadecimal:',
        }
    ]);
};

const generateSvg = (answers) => {
    let generate;
    const { shape, shapeColor, textColor, text } = answers;

    switch (shape) {
        case 'circle':
            generate = new Circle(shapeColor, textColor, text);
            break;
        case 'triangle':
            generate = new Triangle(shapeColor, textColor, text);
            break;
        case 'square': 
            generate = new Square(shapeColor, textColor, text);
            break;
    }

    const svg = generate.render();
    fs.writeFile('./examples/logo.svg', svg, err => {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('SVG succesfully generated and send to the examples folder.');
        }
    });
};

const init = () => {
    const answers = questions();
    generateSvg(answers);
};

init();