const { DIRECTIONS, MOVE_STEP,TABLE_SIZE} = require('./constants');
const { Table } = require('./Table');
const table = new Table(TABLE_SIZE);

class Robot {
    constructor(){
       this.position = {};
    } 
    
  
  setPosition = (position) => {

      if(position){
         
         this.position.x = position.x;
         this.position.y = position.y;
         this.position.f = position.f;
         
      }else{
        console.log("\nNO POSITION VALUE");
        
      }

  };node

  move = () => {
         
    if(table.isTableBoundary(this.position)){
    console.log("\nERROR: REACH TABLE BOUNDARY,TURN LEFT OR RIGHT");
    return;
    }else{
        switch(this.position.f){
        case "NORTH":
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
      
  }

  faceOnChange = (direction) => {
  
    let currentFace = DIRECTIONS.indexOf(this.position.f);

    if( direction === "LEFT"){
        this.position.f = currentFace === 0 ? DIRECTIONS[3] : DIRECTIONS[currentFace-1];
        
    }else if(direction === "RIGHT"){
        this.position.f = currentFace === 3 ? DIRECTIONS[0] : DIRECTIONS[currentFace+1]; 
    
    }else{
        this.position.f = currentFace;
    }
        
    
  }

  getReport =() =>{
    
    console.log(`\nOUTPUT ${this.position.x},${this.position.y},${this.position.f}`);
    
    
  }
}

module.exports = { Robot };