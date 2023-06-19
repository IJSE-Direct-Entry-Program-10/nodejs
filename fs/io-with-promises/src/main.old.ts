import * as fs from 'node:fs';

const folderPath = '/home/ranjith-suranga/Desktop/nodejs';
fs.stat(folderPath , (err, stats) => {
    if (stats){
        console.log("NodeJS Directory exists");
        fs.rmdir(folderPath, err1 => {
            if (err1) {
                console.error(err1);
                return;
            }

            console.log("Directory is deleted");

            fs.mkdir(folderPath, err1 => {
                if (err1){
                    console.error(err1);
                    return;
                }

                console.log("Node JS Directory is created!");
            });
        });
    }else{
        console.log("NodeJS Directory does not exist");
        fs.mkdir(folderPath, err1 => {
            if (err1){
                console.error(err1);
                return;
            }

            console.log("Node JS Directory is created!");
        });
    }
});