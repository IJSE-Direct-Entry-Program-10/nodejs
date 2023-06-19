import * as fs from 'node:fs/promises';

const folderPath = '/home/ranjith-suranga/Desktop/nodejs';

try{
    main();
}catch (e){
    console.error(e);
}

async function main(){
    try{
        await fs.stat(folderPath);
        console.log("Folder exists")
        await fs.rmdir(folderPath);
        console.log("Folder is deleted");
        createDir();
    }catch(err){
        console.log("Folder does not exist");
        createDir();
    }
}

async function createDir(){
    await fs.mkdir(folderPath);
    console.log("Folder is created")
}
