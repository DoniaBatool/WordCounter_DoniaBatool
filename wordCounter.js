#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let counter = (text) => text.replace(/\s/g, "").length;
let isAvailable = true;
async function wordCount(counter) {
    console.log(`
    ██     ██ ███████ ██       ██████  ██████  ███    ███ ███████ 
    ██     ██ ██      ██      ██      ██    ██ ████  ████ ██      
    ██  █  ██ █████   ██      ██      ██    ██ ██ ████ ██ █████   
    ██ ███ ██ ██      ██      ██      ██    ██ ██  ██  ██ ██      
     ███ ███  ███████ ███████  ██████  ██████  ██      ██ ███████ 
                                                                  
                                                                  
    `);
    let response = await inquirer.prompt({
        type: "input",
        name: "text",
        message: (chalk.greenBright("Start Writing Here..."))
    });
    console.log(counter(response.text));
    while (isAvailable) {
        let response2 = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "Would you like to continue or exit?",
            choices: ["Continue", "Exit"]
        });
        console.log(response2.option);
        if (response2.option == "Continue") {
            let response = await inquirer.prompt({
                type: "input",
                name: "text",
                message: (chalk.bold.greenBright("Start Writing Here..."))
            });
            console.log(counter(response.text));
        }
        else {
            console.log("GoodBye!");
            isAvailable = false;
        }
    }
}
wordCount(counter);
