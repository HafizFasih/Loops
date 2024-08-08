#! /usr/bin/env node
import inquirer from "inquirer";
import { months, myMessage, ordinalDate } from "./data.js";
import chalk from "chalk";

console.log(chalk.red("\t\t\t\t\t<======="), chalk.bgWhite.red.italic.bold("CODE WITH MUHAMMAD FASIH"), chalk.red("=======>"))
console.log(chalk.green("\t\t           <---------------"), chalk.blue.italic.bold("A BIRTHDAY GUESSING GAME USING TYPESCRIPT"), chalk.green("--------------->\n"))


//! Messages
for(let i = 0; i < myMessage.length; i++){
    await new Promise(res => setTimeout(res, 2000))
    console.log(chalk.yellow.italic(`\nStep ${i + 1}: ${myMessage[i]}`));
}
console.log("\n");


//! User Input
const user: {
  input: number;
} = await inquirer.prompt([
  {
    name: "input",
    type: "number",
    message: chalk.green.underline("Enter the result (number)..."),
    validate: (val: number) => {
      if (
        val < 351 ||
        val > 1481 ||
        val.toString().length > 4 ||
        val.toString().length < 3 
      ) {
        return chalk.red("You did a mistake in calculation.");
      } else {
        return true;
      }
    },
  },
]);

//! Logic
if(!isNaN(user.input)){
const valInStr: string = user.input.toString();
const day: string = ordinalDate(valInStr);
let month: string =
valInStr.length === 4 ? valInStr.slice(0, 2) : valInStr.charAt(0);
month = (Number(month) - 3).toString();
console.log(chalk.blue.underline(`\nYour birthday date is ${chalk.red.underline(day)} ${chalk.red.underline(months[Number(month)])}`));
}else{
    console.log("\nYou did a mistake in calculation.");
    
}