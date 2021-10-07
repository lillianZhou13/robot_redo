

There are a few ideas I want to implment,but seems to beyond my knowledge at this stage.

1.Wrap the GameCommands to an object with lineListener as static function  and validatePosition as private function private.
I figure that there is no need to create an instance of GameCommeands. 
 The problem I have now is that it seems defining function with fat arrow does not work for static function, but at the same time I need lineListen function to be defined with fat arrow is because that it is being called as a callback function from readline.  I have not find solution for this conflict yet.

 2.Add more solid testing
  now, all testing code is just based on function, while more integration test across class is necessary as well.

 3.error handling 
 I feel the error handling in Robot class is not DRY, the same logic repete twice, but fail to find a bettter place for this code to check if a proper position is set by PLACE. Or mightbe situation for this is more suitable for if condition since it is not exactly an exception, but part of the logic.

 4.input for PLACE command could be more resilient, like "place x,y,f" can be a different order.

 5.output 
 use a lot of console.log to output result, not sure is it is proporate.

  