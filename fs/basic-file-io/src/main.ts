import * as fs from 'node:fs';

console.log("Let's learn to work with file io in node js");

function createDir() {
    fs.mkdir('/home/ranjith-suranga/Desktop/hello-nodejs', err2 => {
        if (err2) {
            console.log("Failed to create the directory");
        } else {
            console.log("Directory is created");
        }
    });
}

fs.stat('/home/ranjith-suranga/Desktop/hello-nodejs', (err, stats) => {
    if (stats){
        console.log("Directory exists");
        fs.rmdir('/home/ranjith-suranga/Desktop/hello-nodejs', err1 => {
           if (err1) {
               console.log("Failed to delete the directory");
           }else {
               console.log("Directory is deleted");
               createDir();
           }
        });
        for (let i = 0; i < 10000; i++) {
            console.log(i);
        }
    }else{
        console.log("Directory does not exist");
        createDir();
    }
});
for (let i = 0; i < 10000; i++) {
    console.log(i);
}
