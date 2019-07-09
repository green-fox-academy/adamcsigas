// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

export { };

declare function require(path: string): any;

const fs = require('fs');



try {
    let content = fs.readFileSync('01-my-file.txt', 'utf-8');
    console.log(content);
} catch (e) {
    console.log('unable to read file: my-file.txt');
}

