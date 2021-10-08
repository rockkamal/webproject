const validator=require('validator');
const chalk=require('chalk');
//console.log(chalk.blue.underline.inverse.('Hello world!'));


const res=validator.isEmail("kamal@kamal.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));








