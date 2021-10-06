const { TABLE_SIZE } = require('./constants');

function Table(TABLE_SIZE){
    this.minX = 0;
    this.minY = 0;
    this.maxX = TABLE_SIZE.x;
    this.maxY = TABLE_SIZE.y;

    this.isBoundary = function(position){
      if((position.x === this.maxX && position.f === "EAST")
        ||(position.y === this.maxY && position.f === "NORTH")
        ||(position.x === this.minX && position.f === "SOUTH")
        ||(position.y === this.minY && position.f === "WEST")){
         return true;
      }else{
         return false;
      }
      
    }
}

module.exports = { Table };