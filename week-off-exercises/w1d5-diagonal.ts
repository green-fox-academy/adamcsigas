'use strict';
export { };
let lineCount: number = 10;

for (let i: number = 0; i <= lineCount; i++) {
    if (i === 0 || i === lineCount) {
        console.log(Array(lineCount + 1).join('%'));
    } else if (i < lineCount - 1) {
        console.log(Array(2).join('%') + Array(i).join(' ') + Array(2).join('%') + Array(lineCount - i - 1
        ).join(' ') + Array(2).join('%'));
        //console.log(Array(lineCount - lineCount + 2 + i).join('%') + Array(lineCount - 1).join(' ') + Array(lineCount - lineCount + 2).join('%'));
    }
}

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is