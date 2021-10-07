const { TABLE_SIZE } = require('./constants');


class Table{
     #minX;
     #minY
     #maxX;
     #maxY;
  constructor(TABLE_SIZE){
    this.#minX = 0;
    this.#minY = 0;
    this.#maxX = TABLE_SIZE.x;
    this.#maxY = TABLE_SIZE.y;
  }
    

     isTableBoundary = (position) =>{
      if((position.x === this.#minX && position.f === "SOUTH")
        ||(position.y === this.#minY && position.f === "WEST")
        ||(position.x === this.#maxX && position.f === "EAST")
        ||(position.y === this.#maxY && position.f === "NORTH")){
         return true;
      }else{
         return false;
      }
      
    }
}

module.exports = { Table };