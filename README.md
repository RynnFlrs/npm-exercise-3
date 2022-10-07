# npm-exercise-3

## For the Infix to Postfix coversion, the algorithm # works as follows:
To run this project, install this npm module:
```
npm install @estilles/expression-parser
```
The user must run the program by the command: node index *'infix_expression'*
```
*Note that the infix_expression must be enclosed by ''
```
Then the program automatically filters the number of arguments being passed by the process.argv using spread operator.
After getting the string infix expression the argument will be passed to the expression parser, and converted it to an array.
Then using the .join('') function will convert the array into a Post Fix String to be displayed.

## HOW TO RUN:
On the terminal, run the program with the ff command:
```
node index '(a+b)^2*c'
```
Expected Output:
```
The infix expression is (a+b)^2*c
The postfix expression is ab+2^c*
```

