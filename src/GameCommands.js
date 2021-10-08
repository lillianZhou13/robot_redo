const { DIRECTIONS,TABLE_SIZE } = require('./constants');
const { Robot } =  require('./Robot');
const bot =  new Robot();


const lineListener = (input) =>{
    
    try{
        const inputCommands = input.toUpperCase().trim();
          if(inputCommands.includes('PLACE')){
              const newPostion=validatePosition(inputCommands);
              if(newPostion){
                  bot.setPosition(newPostion); 
              }else{
                process.stdout.write("\nPLACING COMMAND ERROR\n");
               }
             
           }else{
            if(!bot.position.f) throw "NO VALID POSITION SET,PLACE X,Y,F FIRST";
            switch(inputCommands){
              case "MOVE":
                process.stdout.write("\nMOVE\n");
                bot.move();
                break;
              case "REPORT":
                bot.getReport();
                break;
              case "LEFT":
                bot.faceOnChange("LEFT");
                process.stdout.write("\nLEFT\n");
                break;
              case "RIGHT":
                bot.faceOnChange("RIGHT");
                process.stdout.write("\nRIGHT\n");
                break;        
              default:
                process.stdout.write("\nINPUT ERROR\n")
            }
          
          }
           
        }catch (error) {
          console.log("\nUNVALID INPUT",JSON.stringify(error));
    }
}

const validatePosition = (input) => {
   
    const inputForValidate =  input.split(/[ ,]+/);
    const directionArray = inputForValidate.filter(item=>DIRECTIONS.indexOf(item)!== -1);
    const digitsArray = inputForValidate.filter(item=>/\d/.test(item));
    if(directionArray.length===1 && digitsArray.length === 2 ){
        const x =  +digitsArray[0];
        const y =  +digitsArray[1];
        
        if(x >= 0 && x <= TABLE_SIZE.x && y >= 0 && y <= TABLE_SIZE.y){
          const newPosition = {
            x: x,
            y: y,
            f: directionArray[0]
          }
         return newPosition;
        }else { return false; }
     }else{
         return false;
     }
 }

 module.exports = { lineListener,validatePosition };