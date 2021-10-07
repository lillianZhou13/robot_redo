const { validatePosition  } = require("./GameCommands");

test("should validatePosition founcation work",()=>{
    const inputString = 'Place 3,5,NORTH';
    const inputString2 = 'place 6,6,north';
    const inputString3 = '456';
    const inputString4 = 'place East';
    const inputString5 = '56 east place';
    expect(validatePosition(inputString)).toBeTruthy();
    expect(validatePosition(inputString2)).toBeFalsy();
    expect(validatePosition(inputString3)).toBeFalsy();
    expect(validatePosition(inputString4)).toBeFalsy();
    expect(validatePosition(inputString5)).toBeFalsy();
   
});