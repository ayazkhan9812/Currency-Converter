import inquirer from 'inquirer'

let exchange_rate: any = {
    "USD": 1, // Base currency
    "EUR": 0.9, //European currency
    "JYP": 113, //Japenese Currency 
    "CAD": 1.3, // Canadian Doler
    "AUD": 1.65, // Australian Doler
    "PKR": 280, // Pakistan Rupees
    // Add more currencies and their exchange rates here
}
let user_answer = await inquirer.prompt([
    {
       name:"from_currency",
       type:"list",
       choices:["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"select the currency to convert into:",
        choices:["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to conver:"
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

console.log(`converted amount = ${converted_amount}`);