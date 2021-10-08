const fs = require("fs");
const path = require("path");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const rootFolder = "./putLogsHere";
if (!fs.existsSync(rootFolder)) {
    console.log("no dir ", rootFolder);
    return;
}

const folders = fs.readdirSync(rootFolder).filter(function (folder) {
    const isDir = fs.statSync(rootFolder + "/" + folder).isDirectory();
    // console.log(isDir);
    return isDir;
});

readline.question(`first number?`, (number) => {
    console.log(`Hi ${number}!`);
    let int_number = Number(number.replace(/[^0-9]/g, ""));

    console.log(int_number);

    for (let i in folders) {
        const folder = folders[i];
        const oldFolName = path.join(rootFolder, folder);
        const newFolName = path.join(rootFolder, `- (${int_number++}) ${folder}`);
        fs.renameSync(oldFolName, newFolName);
    }

    readline.close();
});

// console.log(folders.length);
