const readline = require('readline')

const sys = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

sys.question("Enter your name: ",(uname)=>{
    console.log("Welcome "+uname);
});
