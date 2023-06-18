import * as fs from 'node:fs';

const fileContent = `
Hello Node JS File I/O
----------------------
Welcome to NodeJS
                    `;
fs.writeFile('/home/ranjith-suranga/Desktop/nodejs.txt', fileContent, (err)=>{
    if (err){
        console.error(err);
        return;
    }

    console.log("File saved!");
});