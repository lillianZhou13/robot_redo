

const { Robot } =  require('./Robot');



describe('Robot class', () => {
    const botTest =  new Robot();
    const position = {x:3,y:4,f:'NORTH'};
    jest.spyOn(botTest, 'setPosition');
    jest.spyOn(botTest,'faceOnChange');
    jest.spyOn(botTest,'move');

    it('should setPostion method take position as argument and set it to robot', () => {  
      botTest.setPosition(position);
      expect(botTest.setPosition).toHaveBeenCalledTimes(1);
      expect(botTest.position).toEqual(position);
    });

    it('should move method update robot x or y correctly', () => {  
      botTest.move();
      botTest.move();
      expect(botTest.move).toHaveBeenCalledTimes(2);
      expect(botTest.position.y).toEqual(5);
      
    });

    it('should faceOnChange method update Robot face correctly',()=>{
      botTest.faceOnChange('LEFT');
      expect(botTest.faceOnChange).toHaveBeenCalledTimes(1);
      expect(botTest.position.f).toEqual('WEST');
    });
    
  });