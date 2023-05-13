
const inquirer = require("inquirer");
const fs = require('fs');
const SVG = require('./lib/svg.js'); 
const {Circle, Square, Triangle} = require('./lib/shapes.js');

//Function for user prompts
const prompts = function() {
  inquirer.prompt ([
    {
      name: 'text',
      type: 'input',
      message: 'Enter text for the logo. THREE characters max.',
      validate: (text) =>
            text.length <= 3 ||
            "Invalid entry. Must contain THREE characters or less",
    },
    {
      name: 'textColor',
      type: "input",
      message: "Enter a text color",
    },
    {
      name: "shapeType",
      type: "list",
      message: "Select a background shape for the logo",
      choices: ["circle", "square", "triangle"],
    },
    {
      name: "shapeColor",
      type: "input",
      message: "Enter a background shape color",
    },
  ])

  .then(({ text, textColor, shapeType, shapeColor }) => {
    let shape;
    switch (shapeType) {
      case "circle":
        shape = new Circle();
        break;

      case "square":
        shape = new Square();
        break;

      default:
        shape = new Triangle();
        break;
    }
    shape.setColor(shapeColor);

    
    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setShape(shape);
    fs.writeFile("logo.svg", svg.render(), (err) => {
      if (err) throw err;
      console.log("Generated logo.svg");
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("Oops! Something went wrong.");
  });
};
  
prompts();