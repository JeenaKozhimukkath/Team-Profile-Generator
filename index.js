const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./lib/generateTeam.js")
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");

function render() 
{
    this.Intern = [];
    this.Engineer = [];
    this.Manager;
}

const addTeamMember = [];

const questions = async () => {
    const answer = await inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter Member name :",
            name: "name",
            validate: nameVal => {
                if (nameVal) {
                    return true;
                } else {
                    console.log(`You must enter a name!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter your ID :",
            name: "id",
            validate: idVal => {
                if (idVal) {
                    return true;
                } else {
                    console.log(`You must enter an ID!`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Please enter Email address :",
            name: "email",
            validate: emailVal => {
                if (emailVal) {
                    return true;
                } else {
                    console.log(`You must enter a email address!`);
                    return false;
                }
            }
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
            validate: roleVal => {
                if (roleVal) {
                    return true;
                } else {
                    console.log(`You need to select a role!`);
                    return false;
                }
            }
          },
    ])


    if (answer.role === "Manager") {
        const managerNum = await inquirer
        .prompt([
            {
                type: "input",
                message: "Enter your office number :",
                name: "officeNumber",
            }
        ])
        const newManager = new Manager(
            answer.name,
            answer.id,
            answer.email,
            managerNum.officeNumber
          );
          addTeamMember.push(newManager);
        
    } else if (answer.role === "Engineer") {
        const engineerGit = await inquirer
          .prompt([
            {
              type: "input",
              message: "Enter your GitHub username :",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answer.name,
              answer.id,
              answer.email,
              engineerGit.github
            );
            addTeamMember.push(newEngineer);
    } else if (answer.role === "Intern") {
        const internSchool = await inquirer
          .prompt([
            {
              type: "input",
              message: "Name of school :",
              name: "school",
              validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("You must enter a school name!");
                    return false;
                }
            }
            },
          ])
          
          const newIntern = new Intern(
            answer.name,
            answer.id,
            answer.email,
            internSchool.school
          );
          addTeamMember.push(newIntern);          
      
    }
};

async function promptQuestions() {
    await questions()

    const memberOutput = await inquirer
    .prompt([
        {
            name: 'addNewMember',
            type: 'list',
            choices: ['Add a new member', 'Generate team'],
            message: "What would you like to do?",
        }
    ])

    if (memberOutput.addNewMember === 'Add a new member') {
        return promptQuestions();
    }
    return generateHTML();
}

promptQuestions();

function generateHTML () {
    fs.writeFile("./assets/index.html",
    generateTeam(addTeamMember),
    'utf8', 
    err => {
        if (err) {
            throw (err);
        }
        console.log('File created!');
    });
}