import * as fs from 'node:fs';

fs.readFile('/home/ranjith-suranga/Desktop/nodejs.txt',  (err,  data)=> {
   if (err){
       console.error(err);
       return;
   }

   console.log("File has been read successfully");
   console.log(data);
});