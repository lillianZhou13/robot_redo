const { Robot } =  require('./src/Robot');

const robot1 =  new Robot(1);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',(input)=>{
    console.log("input---",input);
    try {
        const inputCommands = input.toUpperCase().trim();
        switch(inputCommands){
          case "PLACE":
            process.stdout.write(`robot--${inputCommands}`);
            robot1.setPosition(inputCommands);
            break;
          case "MOVE":
            robot1.move();
            process.stdout.write(`robot--${inputCommands}`);
            break;
          case "REPORT":
            console.log('robot--',inputCommands);
            break;
          case "LEFT":
            robot1.faceOnChange("LEFT");
            process.stdout.write("LEFT");
            break;
          case "RIGHT":
            robot1.faceOnChange("RIGHT");
            process.stdout.write("RIGHT");
            break;        
          default:
            console.log("nothing input")
         }
        
    } catch (error) {
        process.stdout.write(error);
    }
    
});

rl.on("close",()=>{
 process.exit();
});









