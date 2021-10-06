
const { lineListener } = require('./src/Commands');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',lineListener);

rl.on("close",()=>{
 process.exit();
});


   
   







