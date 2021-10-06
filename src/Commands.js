const { Robot } =  require('./Robot');
const robot1 =  new Robot(1);
const { DIRECTIONS } = require('./constants');
const lineListener = (input) =>{
    try {
        const inputCommands = input.toUpperCase().trim();
          if(inputCommands.includes('PLACE')){
              if(isValidatePosition(inputCommands)){
                  const placedPosition = isValidatePosition(inputCommands);
                  console.log(placedPosition);
                  robot1.setPosition(placedPosition); 
              }else{
                process.stdout.write("UNVALIDATED PLACE");
               }
              
          }else{
            switch(inputCommands){
             case "MOVE":
               console.log("MOVE");
               robot1.move();
               break;
             case "REPORT":
              console.log("REPORT");
               robot1.getReport();
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
          } 
      } catch (error) {
          //process.stdout.write("UNVALIDATED INPUT",JSON.stringify(error));
      }
}

function isValidatePosition(input){
   
    const inputForValidate =  input.split(/[ ,]+/);
    const resF = inputForValidate.filter(item=>DIRECTIONS.indexOf(item)!== -1);
    const digits = inputForValidate.filter(item=>/\d/.test(item));
    if(resF.length>0 && digits.length === 2){
        const placedPosition = {
         x: +digits[0],
         y: +digits[1],
         f: resF[0]
        }
        return placedPosition;
     }else{
         return false;
     }
 }

 module.exports = { lineListener };