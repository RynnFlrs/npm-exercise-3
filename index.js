const { parse, toArray } = require('@estilles/expression-parser');

const process = require('process');
const [,,argument, ...rest] = process.argv
console.log(`The infix expression is ${argument}`);

const postFix = toArray(parse(argument)).join('');
console.log(`The postfix expression is ${postFix}`)
