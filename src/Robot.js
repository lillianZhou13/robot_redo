const { DIRECTIONS, MOVE_STEP,TABLE_SIZE} = require('./constants');
const { Table } = require('./Table');
const table = new Table(TABLE_SIZE);

class Robot {
    constructor(){
       this.position = {
    
    };
    } 
    
  
  setPosition = (position) => {
      console.log("position form place commands",position);
      if(position){
         
         this.position.x = position.x;
         this.position.y = position.y;
         this.position.f = position.f;
      }else{
        console.log("no position value");
      }

  };

  move = () => {
    try{
       if(!this.position.x ||!this.position.y || !this.position.f)  throw "NO VALID POSITION SET";
         console.log("move called in robot",this.position); 
       if(table.isTableBoundary(this.position)){
        console.log("ERROR: REACH TABLE BOUNDARY,TURN LEFT OR RIGHT");
        return;
        }else{
        switch(this.position.f){
          case  "NORTH":
            this.position.y = this.position.y + MOVE_STEP;
            break;
          case "EAST":
            this.position.x = this.position.x + MOVE_STEP
            break;
          case "SOUTH":
            this.position.y = this.position.y - MOVE_STEP;
            break;
          case "WEST":
            this.position.x = this.position.x - MOVE_STEP
            break;
          default:
            return this.position;
       }
    }
      }catch(error){
       console.log("ERROR:NO VALID POSITION");
      }
    
   
  }

  faceOnChange = (direction) => {
  
    let currentFace = DIRECTIONS.indexOf(this.position.f);
    try{
        if(currentFace === -1) throw "NO VALID POSITION SET";
        if( direction === "LEFT"){
            this.position.f = currentFace === 0 ? DIRECTIONS[3] : DIRECTIONS[currentFace-1];
            
          }else if(direction === "RIGHT"){
            this.position.f = currentFace === 3 ? DIRECTIONS[0] : DIRECTIONS[currentFace+1]; 
           
          }else{
              this.position.f = currentFace;
          }
    }catch(error){
      console.log("ERROR: ", JSON.stringify(error));
    }
    
  }

  getReport =() =>{
    if(this.position.x && this.position.y && this.position.f){
        console.log(`\nREPORT x:${this.position.x},y:${this.position.y},f:${this.position.f}`);
    }else{
        console.log("ERROR: NO VALID POSITION SET");
    }
    
  }
}

module.exports = { Robot };