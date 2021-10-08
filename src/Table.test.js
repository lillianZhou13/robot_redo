const { expect } = require('@jest/globals');
const { TABLE_SIZE} = require('./constants');
const { Table } = require('./Table');
const table = new Table(TABLE_SIZE);



test("should isTableBoundary founcation work",()=>{
    const position1 = {x:0,y:0,f:"SOUTH"};
    const position2 = {x:5,y:0,f:"WEST"};
    const position3 = {x:3,y:0,f:"SOUTH"};
    const position4 = {x:5,y:4,f:"EAST"};
    expect(table.isTableBoundary(position1)).toBe(true);
    expect(table.isTableBoundary(position2)).toBe(false);
    expect(table.isTableBoundary(position3)).toBe(true);
    expect(table.isTableBoundary(position4)).toBe(true);
})