const { DIRECTIONS, MOVE_STEP,TABLE_SIZE} = require('./constants');
const { Table } = require('./Table');
const table = new Table(TABLE_SIZE);

function Robot(id){
    this.id = id;
    this.position = {
        x: 0,
        y: 0,
        f: 'EAST'
    };
  
  this.setPosition = function(position){
      console.log("position form place commands",position);
      this.position.x = position.x;
      this.position.y = position.y;
      this.position.f = position.f;
  };

  this.move = function(){
    console.log("move called in robotMove");

    if(table.isBoundry(this.position)){
        console.log("Turn left or right");
        return;
    }else{
       console.log("move one step forward");
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
   
  }

  this.faceOnChange = function(direction){
    let currentFace = DIRECTIONS.indexOf(this.position.f);
    if(currentFace !== -1 && direction === "LEFT"){
      this.position.f = currentFace === 0 ? DIRECTIONS[3] : DIRECTIONS[currentFace-1];
      
    }else if(currentFace !== -1&&direction === "RIGHT"){
      this.position.f = currentFace === 3 ? DIRECTIONS[0] : DIRECTIONS[currentFace+1]; 
     
    }else{
        this.position.f = currentFace;
    }
    console.log("\nROTATE TO ", this.position.f); 
  }
}

module.exports = { Robot };